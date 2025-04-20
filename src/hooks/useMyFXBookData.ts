import { useState, useEffect } from 'react';

interface MyFXBookData {
  gain: number;
  absoluteGain: number;
  daily: number;
  monthly: number;
  drawdown: number;
  balance: number;
  equity: number;
  equityPercent: number;
  highest: number;
  profit: number;
  interest: number;
  deposits: number;
  withdrawals: number;
  lastUpdate: string;
  tracking: number;
}

const CACHE_KEY = 'myfxbook_data';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds
const MAX_RETRIES = 3;
const RETRY_DELAY = 2000; // 2 seconds

const useMyFXBookData = () => {
  const [data, setData] = useState<MyFXBookData | null>(() => {
    // Initialize from cache if available
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < CACHE_DURATION) {
        return data;
      }
    }
    return null;
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getSession = async (retryCount = 0): Promise<string> => {
    try {
      const response = await fetch('https://www.myfxbook.com/api/login.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          email: import.meta.env.VITE_MYFXBOOK_EMAIL,
          password: import.meta.env.VITE_MYFXBOOK_PASSWORD,
        }).toString(),
      });

      const result = await response.json();
      
      if (!result.error && result.session) {
        return result.session;
      }

      throw new Error(result.message || 'Authentication failed');
    } catch (err) {
      if (retryCount < MAX_RETRIES) {
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
        return getSession(retryCount + 1);
      }
      throw err;
    }
  };

  const fetchData = async (retryCount = 0) => {
    try {
      // Get session first
      const session = await getSession();

      // Then fetch account data
      const response = await fetch('https://www.myfxbook.com/api/get-my-account.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          session,
          id: import.meta.env.VITE_MYFXBOOK_ACCOUNT_ID,
        }).toString(),
      });

      const result = await response.json();
      
      if (!result.error && result.account) {
        const newData: MyFXBookData = {
          gain: parseFloat(result.account.gain) || 0,
          absoluteGain: parseFloat(result.account.absoluteGain) || 0,
          daily: parseFloat(result.account.daily) || 0,
          monthly: parseFloat(result.account.monthly) || 0,
          drawdown: parseFloat(result.account.drawdown) || 0,
          balance: parseFloat(result.account.balance) || 0,
          equity: parseFloat(result.account.equity) || 0,
          equityPercent: parseFloat(result.account.equityPercent) || 0,
          highest: parseFloat(result.account.highest) || 0,
          profit: parseFloat(result.account.profit) || 0,
          interest: parseFloat(result.account.interest) || 0,
          deposits: parseFloat(result.account.deposits) || 0,
          withdrawals: parseFloat(result.account.withdrawals) || 0,
          lastUpdate: result.account.lastUpdate || new Date().toISOString(),
          tracking: parseInt(result.account.tracking) || 0
        };

        // Update state and cache
        setData(newData);
        setError(null);
        localStorage.setItem(CACHE_KEY, JSON.stringify({
          data: newData,
          timestamp: Date.now()
        }));
      } else {
        throw new Error(result.message || 'Failed to fetch account data');
      }
    } catch (err) {
      console.error('MyFXBook data fetch error:', err);
      if (retryCount < MAX_RETRIES) {
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
        return fetchData(retryCount + 1);
      }
      setError('Failed to fetch live data. Using cached data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let isSubscribed = true;
    
    const initFetch = async () => {
      if (isSubscribed) {
        await fetchData();
      }
    };

    initFetch();
    
    // Set up polling
    const interval = setInterval(async () => {
      if (isSubscribed) {
        await fetchData();
      }
    }, CACHE_DURATION);

    return () => {
      isSubscribed = false;
      clearInterval(interval);
    };
  }, []);

  return { data, loading, error };
};

export default useMyFXBookData; 
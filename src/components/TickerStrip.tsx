import { useEffect, useState } from 'react';

// Market data interface
interface MarketItem {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
}

interface TickerStripProps {
  type?: 'stocks' | 'forex';
  className?: string;
}

// Fallback data in case API fails
const fallbackData: MarketItem[] = [
  { symbol: 'EUR/USD', price: 1.0845, change: -0.0012, changePercent: -0.11 },
  { symbol: 'GBP/USD', price: 1.2655, change: 0.0008, changePercent: 0.06 },
  { symbol: 'USD/JPY', price: 151.42, change: 0.15, changePercent: 0.10 },
  { symbol: 'XAU/USD', price: 2021.85, change: 2.50, changePercent: 0.12 },
  { symbol: 'BTC/USD', price: 65254.00, change: 450.00, changePercent: 0.69 },
  { symbol: 'ETH/USD', price: 3245.50, change: 25.50, changePercent: 0.79 }
];

const TickerStrip = ({ className = '' }: TickerStripProps) => {
  const [marketData, setMarketData] = useState<MarketItem[]>(fallbackData);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await fetch('http://localhost:8001/api/market-data');
        if (!response.ok) throw new Error('Failed to fetch market data');
        
        const data = await response.json();
        const processedData = data.map((item: any) => ({
          symbol: item.symbol.replace('=X', '/USD'),
          price: item.price,
          change: item.change,
          changePercent: item.changePercent
        })).filter((item: MarketItem) => item.price > 0);

        if (processedData.length > 0) {
          setMarketData(processedData);
          setError(null);
        }
      } catch (error) {
        console.error('Error fetching market data:', error);
        setError('Using fallback data - Live connection failed');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMarketData();
    const intervalId = setInterval(fetchMarketData, 30000); // Refresh every 30 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatPrice = (price: number, symbol: string) => {
    if (symbol.includes('BTC')) {
      return price.toFixed(1);
    } else if (symbol.includes('ETH') || symbol.includes('LTC')) {
      return price.toFixed(2);
    } else if (symbol.includes('XAU')) {
      return price.toFixed(2);
    } else if (symbol.includes('/')) {
      return price.toFixed(4);
    }
    return price.toFixed(2);
  };

  if (isLoading) {
    return (
      <div className={`w-full bg-white/95 backdrop-blur-sm py-3 ${className}`}>
        <div className="container mx-auto text-center text-forex-gray">
          Loading market data...
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div className="relative whitespace-nowrap py-3 flex ticker-container">
        <div className="animate-ticker flex items-center">
          {[...marketData, ...marketData].map((item, index) => (
            <div 
              key={index} 
              className="inline-flex items-center px-6 hover:bg-gray-50/50 transition-colors duration-300"
            >
              <span className="text-base font-semibold text-forex-black">{item.symbol}</span>
              <span className="ml-3 text-base font-medium text-forex-black">
                {formatPrice(item.price, item.symbol)}
              </span>
              <span 
                className={`ml-3 text-base font-medium ${
                  item.change >= 0 ? 'text-forex-green' : 'text-red-500'
                }`}
              >
                {item.change >= 0 ? '+' : ''}
                {formatPrice(item.change, item.symbol)}
                <span className="ml-1">
                  ({item.changePercent >= 0 ? '+' : ''}{item.changePercent.toFixed(2)}%)
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
      {error && (
        <div className="absolute bottom-0 right-0 text-xs text-forex-gray bg-white/80 px-2 py-1 rounded">
          {error}
        </div>
      )}
      <style jsx>{`
        .ticker-container {
          width: 100%;
          display: flex;
          overflow: hidden;
          position: relative;
          background: white;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
        
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-ticker {
          animation: ticker 40s linear infinite;
          white-space: nowrap;
          will-change: transform;
          display: flex;
        }
        
        /* Pause animation on hover */
        .ticker-container:hover .animate-ticker {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TickerStrip;

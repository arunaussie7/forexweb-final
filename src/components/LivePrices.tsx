import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpIcon, ArrowDownIcon, RefreshCwIcon } from 'lucide-react';

interface MarketData {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  previousClose: number;
  lastUpdated: string;
  error?: string;
}

const LivePrices = () => {
  const [marketData, setMarketData] = useState<MarketData[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const wsRef = useRef<WebSocket | null>(null);

  const fetchMarketData = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8001/api/market-data');
      if (!response.ok) throw new Error('Failed to fetch market data');
      const data = await response.json();
      setMarketData(data);
      setLastUpdated(new Date());
    } catch (error) {
      console.error('Error fetching market data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMarketData();
    const intervalId = setInterval(fetchMarketData, 30000); // Refresh every 30 seconds
    
    return () => {
      clearInterval(intervalId);
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, []);

  const formatPrice = (price: number, symbol: string) => {
    if (symbol.includes('=X') || symbol.includes('/')) {
      return price.toFixed(4);
    }
    return price.toFixed(2);
  };

  const formatChange = (change: number, symbol: string) => {
    if (symbol.includes('=X') || symbol.includes('/')) {
      return change.toFixed(4);
    }
    return change.toFixed(2);
  };

  return (
    <Card className="w-full shadow-premium border border-gray-100 overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
      <CardHeader className="bg-gradient-premium p-4 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg text-forex-black">Live Market Prices</CardTitle>
          <div className="flex items-center gap-2 text-xs text-forex-gray">
            <span>Last updated: {lastUpdated.toLocaleTimeString()}</span>
            <button 
              onClick={fetchMarketData} 
              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
              disabled={loading}
            >
              <RefreshCwIcon size={16} className={`text-forex-green ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {marketData.map((item, index) => (
            <div 
              key={index} 
              className={`p-4 border-b border-r border-gray-100 transition-colors duration-300 ${
                index % 2 === 0 ? 'bg-white' : 'bg-forex-lightgray'
              } hover:bg-gray-50`}
            >
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-forex-black">{item.symbol}</span>
                  <span 
                    className={`flex items-center text-xs font-medium ${
                      item.change >= 0 ? 'text-forex-green' : 'text-red-500'
                    }`}
                  >
                    {item.change >= 0 ? (
                      <ArrowUpIcon size={12} className="mr-0.5" />
                    ) : (
                      <ArrowDownIcon size={12} className="mr-0.5" />
                    )}
                    {item.change >= 0 ? '+' : ''}
                    {formatChange(item.change, item.symbol)}
                    <span className="ml-1">
                      ({item.changePercent >= 0 ? '+' : ''}{item.changePercent.toFixed(2)}%)
                    </span>
                  </span>
                </div>
                <div className="flex items-end justify-between mt-1">
                  <span className="text-lg font-bold">
                    {formatPrice(item.price, item.symbol)}
                  </span>
                  <span className="text-xs text-forex-gray">
                    Prev: {formatPrice(item.previousClose, item.symbol)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LivePrices;

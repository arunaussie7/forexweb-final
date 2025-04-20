import React, { useState } from 'react';
import { TrendingUp, LineChart, BarChart2, Wallet, DollarSign, Clock } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// First account data (EXNESS 1)
const accountData1 = {
  gain: 152.73,
  absoluteGain: 135.36,
  daily: 6.38,
  monthly: 152.73,
  drawdown: 13.80,
  balance: 8553.88,
  equity: 8697.70,
  equityPercent: 101.68,
  highest: 10612.26,
  profit: 6644.88,
  interest: 0,
  deposits: 4909.00,
  withdrawals: 3000.00,
  lastUpdate: '46 seconds ago',
  tracking: 0
};

// Second account data (EXNESS 2)
const accountData2 = {
  gain: 122.42,
  absoluteGain: 122.42,
  daily: 1.49,
  monthly: 57.64,
  drawdown: 31.47,
  balance: 9232.45,
  equity: 9249.87,
  equityPercent: 100.19,
  highest: 9232.45,
  profit: 5081.51,
  interest: 0,
  deposits: 4150.94,
  withdrawals: 0,
  lastUpdate: '7 hours ago',
  tracking: 0
};

// Combined chart data for both accounts
const combinedChartData = {
  labels: ['Feb 24', 'Apr 05', 'Apr 07', 'Apr 09', 'Apr 11', 'Apr 14', 'Apr 15', 'Apr 16', 'Apr 17'],
  datasets: [
    {
      label: 'Client 1',
      data: [null, 0, -0.01, 15, 35, 60, 65, 120, 152.73],
      borderColor: '#ec4899',
      backgroundColor: 'rgba(236, 72, 153, 0.1)',
      tension: 0.4,
      fill: false
    },
    {
      label: 'Client 2',
      data: [0, 5, 20, 70, 45, 130, 95, 110, 122.42],
      borderColor: '#9333ea',
      backgroundColor: 'rgba(147, 51, 234, 0.1)',
      tension: 0.4,
      fill: false
    }
  ]
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      max: 180,
      grid: {
        color: 'rgba(0, 0, 0, 0.1)'
      },
      ticks: {
        color: '#4b5563',
        callback: (value: number) => `${value}%`
      }
    },
    x: {
      grid: {
        color: 'rgba(0, 0, 0, 0.1)'
      },
      ticks: {
        color: '#4b5563'
      }
    }
  },
  plugins: {
    legend: {
      display: true,
      position: 'top' as const,
      labels: {
        usePointStyle: true,
        padding: 20,
        font: {
          size: 12,
          weight: 600
        }
      }
    },
    tooltip: {
      mode: 'index' as const,
      intersect: false,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      titleColor: '#111827',
      bodyColor: '#111827',
      borderColor: '#e5e7eb',
      borderWidth: 1,
      padding: 12,
      callbacks: {
        label: (context: any) => `${context.dataset.label}: ${context.parsed.y}%`
      }
    }
  },
  interaction: {
    mode: 'index' as const,
    axis: 'x' as const,
    intersect: false
  }
};

const AccountStats = ({ data }: { data: any }) => {
  const formatPercent = (num: number) => `${num >= 0 ? '+' : ''}${num.toFixed(2)}%`;
  const formatCurrency = (num: number) => `USC${num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <div className="space-y-4">
        <div className="flex justify-between items-center border-b border-gray-100 pb-3">
          <span className="text-gray-600 font-medium">Gain:</span>
          <span className="text-xl font-bold text-green-600">{formatPercent(data.gain)}</span>
        </div>
        <div className="flex justify-between items-center border-b border-gray-100 pb-3">
          <span className="text-gray-600 font-medium">Abs. Gain:</span>
          <span className="text-xl text-green-600">{formatPercent(data.absoluteGain)}</span>
        </div>
        <div className="flex justify-between items-center border-b border-gray-100 pb-3">
          <span className="text-gray-600 font-medium">Daily:</span>
          <span className="text-xl text-gray-800">{formatPercent(data.daily)}</span>
        </div>
        <div className="flex justify-between items-center border-b border-gray-100 pb-3">
          <span className="text-gray-600 font-medium">Monthly:</span>
          <span className="text-xl text-gray-800">{formatPercent(data.monthly)}</span>
        </div>
        <div className="flex justify-between items-center border-b border-gray-100 pb-3">
          <span className="text-gray-600 font-medium">Drawdown:</span>
          <span className="text-xl text-gray-800">{formatPercent(data.drawdown)}</span>
        </div>
        <div className="flex justify-between items-center border-b border-gray-100 pb-3">
          <span className="text-gray-600 font-medium">Balance:</span>
          <span className="text-xl text-gray-800">{formatCurrency(data.balance)}</span>
        </div>
        <div className="flex justify-between items-center border-b border-gray-100 pb-3">
          <span className="text-gray-600 font-medium">Equity:</span>
          <span className="text-xl text-gray-800">({data.equityPercent}%) {formatCurrency(data.equity)}</span>
        </div>
        <div className="flex justify-between items-center border-b border-gray-100 pb-3">
          <span className="text-gray-600 font-medium">Highest:</span>
          <span className="text-xl text-gray-800">{formatCurrency(data.highest)}</span>
        </div>
        <div className="flex justify-between items-center border-b border-gray-100 pb-3">
          <span className="text-gray-600 font-medium">Profit:</span>
          <span className="text-xl text-green-600">{formatCurrency(data.profit)}</span>
        </div>
        <div className="flex justify-between items-center border-b border-gray-100 pb-3">
          <span className="text-gray-600 font-medium">Interest:</span>
          <span className="text-xl text-gray-800">{formatCurrency(data.interest)}</span>
        </div>
        <div className="flex justify-between items-center border-b border-gray-100 pb-3">
          <span className="text-gray-600 font-medium">Deposits:</span>
          <span className="text-xl text-gray-800">{formatCurrency(data.deposits)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 font-medium">Withdrawals:</span>
          <span className="text-xl text-gray-800">{formatCurrency(data.withdrawals)}</span>
        </div>
      </div>
    </div>
  );
};

const PerformanceSection = () => {
  return (
    <div className="relative py-20 bg-gradient-to-br from-green-50 via-white to-green-50">
      <div className="absolute inset-0 bg-[url('/chart-pattern.svg')] opacity-5" />
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
            Account Performance
          </h2>
          <p className="text-gray-600 text-lg">Track our real-time trading performance and results</p>
        </div>

        {/* Combined Chart */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 mb-8">
          <div className="h-[400px]">
            <Line data={combinedChartData} options={chartOptions} />
          </div>
        </div>

        {/* Stats Side by Side */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Client 1 */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-800">Client 1</h3>
              <div className="text-sm text-gray-500">05 Apr - 17 Apr 2025</div>
            </div>
            <AccountStats data={accountData1} />
            <div className="mt-4 text-center">
              <a 
                href="https://www.myfxbook.com/portfolio/manju-chitragar/11477367"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-400 transition-all duration-200 inline-flex items-center gap-2 text-sm font-medium hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Verify Performance
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Client 2 */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-800">Client 2</h3>
              <div className="text-sm text-gray-500">24 Feb - 17 Apr 2025</div>
            </div>
            <AccountStats data={accountData2} />
            <div className="mt-4 text-center">
              <a 
                href="https://www.myfxbook.com/portfolio/swat-acc/11476842"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-500 transition-all duration-200 inline-flex items-center gap-2 text-sm font-medium hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Verify Performance
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceSection; 
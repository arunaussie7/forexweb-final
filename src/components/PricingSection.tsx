import React from 'react';
import { Check } from 'lucide-react';

const PricingSection = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Pricing</h2>
          <p className="text-xl text-gray-600">
            Choose the perfect plan for your trading journey. All plans include our powerful features and dedicated support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Basic</h3>
              <div className="px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                3 Months
              </div>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-bold text-gray-900">$199</span>
              <span className="text-gray-500 ml-2">/quarter</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-forex-green mr-3" />
                <span>1 Live Trading Account</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-forex-green mr-3" />
                <span>Full Access to Trading Bot</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-forex-green mr-3" />
                <span>24/7 Customer Support</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-forex-green mr-3" />
                <span>Real-time Trade Monitoring</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-forex-green mr-3" />
                <span>Risk Management Tools</span>
              </li>
            </ul>
            <button className="w-full py-4 px-8 text-white bg-forex-green rounded-xl hover:bg-forex-green/90 transition-colors duration-200 font-semibold">
              Get Started
            </button>
          </div>

          {/* Gold Plan */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-forex-green p-8 hover:shadow-2xl transition-shadow duration-300 relative">
            <div className="absolute top-0 right-8 transform -translate-y-1/2">
              <div className="bg-forex-green text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
            </div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Gold</h3>
              <div className="px-4 py-1 bg-green-50 text-forex-green rounded-full text-sm font-medium">
                6 Months
              </div>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-bold text-gray-900">$249</span>
              <span className="text-gray-500 ml-2">/semi-annual</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-forex-green mr-3" />
                <span>All Basic Features</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-forex-green mr-3" />
                <span>Priority Customer Support</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-forex-green mr-3" />
                <span>Advanced Trading Strategies</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-forex-green mr-3" />
                <span>Performance Analytics</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-forex-green mr-3" />
                <span>Email Trade Notifications</span>
              </li>
            </ul>
            <button className="w-full py-4 px-8 text-white bg-forex-green rounded-xl hover:bg-forex-green/90 transition-colors duration-200 font-semibold">
              Get Started
            </button>
          </div>

          {/* Elite Plan */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Elite</h3>
              <div className="px-4 py-1 bg-purple-50 text-purple-600 rounded-full text-sm font-medium">
                Annual
              </div>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-bold text-gray-900">$349</span>
              <span className="text-gray-500 ml-2">/year</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-forex-green mr-3" />
                <span>All Gold Features</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-forex-green mr-3" />
                <span>VIP Customer Support</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-forex-green mr-3" />
                <span>Custom Strategy Configuration</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-forex-green mr-3" />
                <span>Advanced Risk Management</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-forex-green mr-3" />
                <span>Monthly Strategy Review</span>
              </li>
            </ul>
            <button className="w-full py-4 px-8 text-white bg-forex-green rounded-xl hover:bg-forex-green/90 transition-colors duration-200 font-semibold">
              Get Started
            </button>
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">All Plans Include</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-md">
              <div className="text-forex-green mb-4">
                <Check className="h-8 w-8 mx-auto" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Equity Protection</h4>
              <p className="text-gray-600">Advanced risk management to protect your capital</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <div className="text-forex-green mb-4">
                <Check className="h-8 w-8 mx-auto" />
              </div>
              <h4 className="text-lg font-semibold mb-2">24/7 Support</h4>
              <p className="text-gray-600">Round-the-clock customer assistance</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <div className="text-forex-green mb-4">
                <Check className="h-8 w-8 mx-auto" />
              </div>
              <h4 className="text-lg font-semibold mb-2">MT4 Compatible</h4>
              <p className="text-gray-600">Works seamlessly with MetaTrader 4</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <div className="text-forex-green mb-4">
                <Check className="h-8 w-8 mx-auto" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Regular Updates</h4>
              <p className="text-gray-600">Continuous improvements and optimizations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection; 
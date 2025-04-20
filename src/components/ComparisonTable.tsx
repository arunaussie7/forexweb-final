import React from 'react';
import { Check, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ComparisonTable = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-2xl shadow-2xl">
      <h2 className="text-2xl font-semibold text-center mb-8 text-white">What makes us <span className="text-forex-green">different</span>?</h2>
      
      <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-3 gap-0">
          {/* Header */}
          <div className="p-6 bg-gray-800 border-b border-gray-700">
            <h3 className="text-lg font-medium text-gray-300">Basic features</h3>
          </div>
          <div className="p-6 bg-gray-800/50 border-b border-gray-700">
            <h3 className="text-lg font-medium text-forex-green text-center">THE FOREX COMPANY</h3>
          </div>
          <div className="p-6 bg-gray-800 border-b border-gray-700">
            <h3 className="text-lg font-medium text-gray-300 text-center">OTHERS</h3>
          </div>

          {/* Features */}
          <div className="p-6 bg-gray-800 border-b border-gray-700">
            <p className="text-gray-300">No Martingale</p>
          </div>
          <div className="p-6 bg-gray-800/50 border-b border-gray-700">
            <div className="flex justify-center">
              <Check className="text-forex-green" size={24} />
            </div>
          </div>
          <div className="p-6 bg-gray-800 border-b border-gray-700">
            <div className="flex justify-center">
              <X className="text-red-500" size={24} />
            </div>
          </div>

          <div className="p-6 bg-gray-800 border-b border-gray-700">
            <p className="text-gray-300">Risk Management</p>
          </div>
          <div className="p-6 bg-gray-800/50 border-b border-gray-700">
            <div className="flex justify-center">
              <Check className="text-forex-green" size={24} />
            </div>
          </div>
          <div className="p-6 bg-gray-800 border-b border-gray-700">
            <div className="flex justify-center">
              <X className="text-red-500" size={24} />
            </div>
          </div>

          <div className="p-6 bg-gray-800 border-b border-gray-700">
            <p className="text-gray-300">24/7 Support</p>
          </div>
          <div className="p-6 bg-gray-800/50 border-b border-gray-700">
            <div className="flex justify-center">
              <Check className="text-forex-green" size={24} />
            </div>
          </div>
          <div className="p-6 bg-gray-800 border-b border-gray-700">
            <div className="flex justify-center">
              <X className="text-red-500" size={24} />
            </div>
          </div>

          <div className="p-6 bg-gray-800">
            <p className="text-gray-300">Custom Development</p>
          </div>
          <div className="p-6 bg-gray-800/50">
            <div className="flex justify-center">
              <Check className="text-forex-green" size={24} />
            </div>
          </div>
          <div className="p-6 bg-gray-800">
            <div className="flex justify-center">
              <X className="text-red-500" size={24} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => navigate('/pricing')}
          className="bg-forex-green hover:bg-forex-darkgreen text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
        >
          Want to see full pricing?
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ComparisonTable; 
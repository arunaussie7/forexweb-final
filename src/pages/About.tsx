import React from 'react';
import { Eye, Target, Diamond, Bot, Cpu, Brain, ArrowRight, ChevronRight, Sparkles, LineChart, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      {/* Main container */}
      <div className="container mx-auto px-4">
        {/* About Us Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">About Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn about the visionary leaders behind The Forex Company
          </p>
        </div>

        {/* Founders Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Our Founders</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Founder Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
              <div className="w-56 h-64 mx-auto mt-6 mb-4 rounded-xl overflow-hidden ring-4 ring-emerald-100">
                <img
                  src="/arun.jpeg"
                  alt="Arun Chitragar"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "/placeholder.svg";
                  }}
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Arun Chitragar</h3>
                <p className="text-md font-semibold text-emerald-600 mb-2">Founder & CEO</p>
                <p className="text-sm text-gray-600">
                  A visionary leader with extensive experience in forex trading and financial markets, 
                  Arun brings innovative solutions to the world of algorithmic trading.
                </p>
              </div>
            </div>

            {/* Co-founder Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
              <div className="w-56 h-64 mx-auto mt-6 mb-4 rounded-xl overflow-hidden ring-4 ring-emerald-100">
                <img
                  src="/cofounder.jpeg"
                  alt="Naveenkumar"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Naveenkumar</h3>
                <p className="text-md font-semibold text-emerald-600 mb-2">Co-founder & CTO</p>
                <p className="text-sm text-gray-600">
                  A technical expert with deep knowledge in algorithmic trading systems and market analysis,
                  bringing cutting-edge solutions to the forex trading landscape.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision, Mission, Values Section */}
        <div className="max-w-6xl mx-auto py-8 bg-emerald-50/50 backdrop-blur-sm rounded-2xl px-4 mb-16 shadow-lg">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Vision Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <Eye className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600">A World Where Trading is for Everyone.</p>
            </div>

            {/* Mission Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <Target className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600">Empowering You with Revolutionary Tools.</p>
            </div>

            {/* Values Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <Diamond className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Values</h3>
              <p className="text-gray-600">Ethical, Transparent, Customer obsessed</p>
            </div>
          </div>
        </div>

        {/* Trading Bot Technology Section */}
        <div className="max-w-6xl mx-auto mb-16">
          {/* Hero Section */}
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-emerald-500/10 rounded-3xl"></div>
            <div className="relative py-12 px-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-400">
                Meet Edith: The Future of Trading
              </h2>
              <p className="text-xl text-gray-700 font-medium">
                Where Advanced Technology Meets Precision Trading
              </p>
            </div>
          </div>

          {/* Technology Icons with Enhanced Design */}
          <div className="relative mb-20">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 to-transparent rounded-3xl"></div>
            <div className="relative flex items-center justify-center gap-6 py-12">
              <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-transform">
                <Bot className="w-12 h-12 text-white drop-shadow-md" />
              </div>
              <div className="text-emerald-500 text-4xl font-light">+</div>
              <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-transform">
                <LineChart className="w-12 h-12 text-white drop-shadow-md" />
              </div>
              <div className="text-emerald-500 text-4xl font-light">+</div>
              <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-transform">
                <ShieldCheck className="w-12 h-12 text-white drop-shadow-md" />
              </div>
              <div className="text-emerald-500 text-4xl font-light">=</div>
              <div className="w-64 transform hover:scale-105 transition-transform">
                <img 
                  src="/DeWatermark.ai_1744991894173-removebg-preview.png" 
                  alt="Edith Trading Bot"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Technology Description with Enhanced Design */}
          <div className="text-center mb-20 max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
            <Sparkles className="w-8 h-8 text-emerald-500 mx-auto mb-4" />
            <p className="text-gray-700 text-lg leading-relaxed">
              <span className="font-semibold text-xl block mb-4">Advanced Rule-Based Trading Excellence</span>
              Our proprietary Forex EA leverages sophisticated rule-based algorithms, crafted through years of market analysis and trading expertise. 
              Unlike conventional systems, Edith employs a dynamic combination of technical indicators, price action patterns, and risk management rules, 
              ensuring precise trade execution and consistent performance across various market conditions.
              <span className="block mt-4 text-emerald-600 font-medium">
                99.99% Accurate | Back-tested | Risk-Optimized
              </span>
            </p>
          </div>

          {/* How it Works Section with Enhanced Design */}
          <div className="bg-white rounded-3xl shadow-xl p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-emerald-50 to-transparent"></div>
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">How it Works</h3>
            <div className="max-w-3xl mx-auto relative">
              <div className="flex flex-col items-center space-y-6">
                {/* Step 1 */}
                <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-5 w-full text-center shadow-md hover:shadow-lg transition-shadow">
                  Feature Selection & Market Analysis
                </div>
                <ChevronRight className="text-emerald-500 transform rotate-90 w-8 h-8" />
                
                {/* Step 2 */}
                <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-5 w-full text-center shadow-md hover:shadow-lg transition-shadow">
                  Advanced Rule-Based Pattern Recognition
                </div>
                <ChevronRight className="text-emerald-500 transform rotate-90 w-8 h-8" />
                
                {/* Step 3 */}
                <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-5 w-full text-center shadow-md hover:shadow-lg transition-shadow">
                  Dynamic Risk Management Calculation
                </div>
                <div className="flex justify-center w-full gap-20">
                  <ChevronRight className="text-emerald-500 transform -rotate-45 w-8 h-8" />
                  <ChevronRight className="text-emerald-500 transform rotate-45 w-8 h-8" />
                </div>
                
                {/* Step 4 - Split */}
                <div className="flex justify-between w-full gap-8">
                  <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-5 w-1/2 text-center shadow-md hover:shadow-lg transition-shadow">
                    Position Sizing & Risk Adjustment
                  </div>
                  <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-5 w-1/2 text-center shadow-md hover:shadow-lg transition-shadow">
                    Market Trend Analysis & Prediction
                  </div>
                </div>
                <ChevronRight className="text-emerald-500 transform rotate-90 w-8 h-8" />
                
                {/* Step 5 */}
                <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl p-5 w-full text-center shadow-md text-white font-medium">
                  Precise Trade Execution & Monitoring
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 
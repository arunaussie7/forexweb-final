import { Code, Shield, LineChart, GitBranch, Cpu, BarChart4, Lock, Zap } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { useState } from 'react';
import ComparisonTable from './ComparisonTable';

const DevelopmentSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="development" className="section-padding bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-br from-gray-800 to-gray-900 opacity-70 transform rotate-180 pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-forex-green/10 rounded-full"></div>
      
      <div className="section-container relative z-10">
        {/* Comparison Table */}
        <div className="mb-16 animate-on-scroll opacity-0">
          <ComparisonTable />
        </div>

        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Custom Development</h2>
          <div className="h-1 w-20 bg-forex-green mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We build custom algorithmic trading solutions tailored to your specific strategy and requirements. 
            Our development process ensures secure, efficient, and profitable trading bots.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="premium-card p-8 animate-on-scroll opacity-0 hover:-translate-y-1 transition-all duration-300 bg-gray-800 border-gray-700">
            <div className="w-14 h-14 bg-forex-green/10 rounded-full flex items-center justify-center mb-6">
              <Code className="text-forex-green" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">MQL Development</h3>
            <p className="text-gray-300">
              Custom development using the MetaQuotes Language (MQL4/MQL5) for MT4 and MT5 platforms, 
              ensuring compatibility with the most popular trading platforms.
            </p>
          </Card>

          <Card className="premium-card p-8 animate-on-scroll opacity-0 hover:-translate-y-1 transition-all duration-300 bg-gray-800 border-gray-700">
            <div className="w-14 h-14 bg-forex-green/10 rounded-full flex items-center justify-center mb-6">
              <Shield className="text-forex-green" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Risk Management</h3>
            <p className="text-gray-300">
              Advanced risk management features including stop-loss, take-profit, 
              and position sizing to protect your capital.
            </p>
          </Card>

          <Card className="premium-card p-8 animate-on-scroll opacity-0 hover:-translate-y-1 transition-all duration-300 bg-gray-800 border-gray-700">
            <div className="w-14 h-14 bg-forex-green/10 rounded-full flex items-center justify-center mb-6">
              <LineChart className="text-forex-green" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Performance Testing</h3>
            <p className="text-gray-300">
              Rigorous backtesting and optimization using historical data to ensure 
              reliable performance across different market conditions.
            </p>
          </Card>
        </div>

        <Card className="premium-card animate-on-scroll opacity-0 bg-gray-800 border-gray-700">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-8 text-center text-white">Our Development Process</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-forex-green/10 rounded-full flex items-center justify-center mt-1 mr-5">
                  <span className="text-forex-green font-semibold text-lg">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-3 text-white">Strategy Analysis</h4>
                  <p className="text-gray-300">
                    We begin by understanding your trading strategy, risk tolerance, and specific requirements.
                    Our team of experts will analyze your trading methodology and suggest improvements.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-forex-green/10 rounded-full flex items-center justify-center mt-1 mr-5">
                  <span className="text-forex-green font-semibold text-lg">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-3 text-white">Algorithm Design</h4>
                  <p className="text-gray-300">
                    Our team designs the algorithm with optimal entry/exit conditions, risk management, and error handling.
                    We create detailed specifications and performance expectations.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-forex-green/10 rounded-full flex items-center justify-center mt-1 mr-5">
                  <span className="text-forex-green font-semibold text-lg">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-3 text-white">Development & Testing</h4>
                  <p className="text-gray-300">
                    We develop and test your bot against historical data to optimize performance.
                    Our rigorous testing process ensures your strategy performs as expected across various market conditions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-forex-green/10 rounded-full flex items-center justify-center mt-1 mr-5">
                  <span className="text-forex-green font-semibold text-lg">4</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-3 text-white">Deployment & Support</h4>
                  <p className="text-gray-300">
                    We help you deploy the bot and provide ongoing support and updates as needed.
                    Our team remains available for optimization and adjustments as market conditions evolve.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <button 
                onClick={scrollToContact}
                className="bg-forex-green hover:bg-forex-darkgreen text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                Request Custom Bot
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DevelopmentSection;

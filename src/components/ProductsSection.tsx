import { TrendingUp, BarChart, Shield, ArrowRightCircle, Bot, Code, Lock, Zap } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import BackgroundVisuals from './BackgroundVisuals';

const ProductsSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="relative section-padding">
      <BackgroundVisuals section="products" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
          <div className="h-1 w-20 bg-forex-green mx-auto mb-6"></div>
          <p className="text-forex-gray max-w-3xl mx-auto">
            Our Expert Advisors are designed to maximize profits while minimizing risk, 
            using sophisticated algorithms that remove emotional decision-making from your trading.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Product 1 - EDITH */}
          <Card className="premium-card animate-on-scroll opacity-0 group">
            <div className="h-2 bg-forex-green rounded-t-xl"></div>
            <CardHeader className="pt-8 pb-0">
              <div className="flex items-start justify-between">
                <div>
                  <div className="mb-4 p-3 bg-forex-green/10 rounded-lg inline-block group-hover:bg-forex-green/20 transition-colors">
                    <Bot className="text-forex-green" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">EDITH EA</h3>
                </div>
                <div className="bg-forex-lightgray py-1 px-3 rounded-full text-xs font-medium text-forex-gray">Flagship</div>
              </div>
              <p className="text-forex-gray mb-6">
                Our flagship Expert Advisor powered by advanced rule-based algorithms,
                designed for consistent performance across multiple currency pairs.
              </p>
            </CardHeader>
            
            <CardContent className="pt-0">
              <h4 className="text-lg font-medium mb-4">Key Features:</h4>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 bg-forex-green/10 rounded-full flex items-center justify-center mt-0.5 mr-3 
                    group-hover:bg-forex-green/20 transition-colors">
                    <TrendingUp className="text-forex-green" size={14} />
                  </div>
                  <span className="text-forex-gray">Advanced trend detection algorithm</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 bg-forex-green/10 rounded-full flex items-center justify-center mt-0.5 mr-3
                    group-hover:bg-forex-green/20 transition-colors">
                    <BarChart className="text-forex-green" size={14} />
                  </div>
                  <span className="text-forex-gray">Automatic risk management (0.5% to 3%)</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 bg-forex-green/10 rounded-full flex items-center justify-center mt-0.5 mr-3
                    group-hover:bg-forex-green/20 transition-colors">
                    <Shield className="text-forex-green" size={14} />
                  </div>
                  <span className="text-forex-gray">Trailing stop-loss protection</span>
                </li>
              </ul>
            </CardContent>
            
            <CardFooter>
              <div className="flex justify-center w-full">
                <button 
                  onClick={scrollToContact}
                  className="button-primary shine-effect flex items-center group"
                >
                  Contact for More
                  <ArrowRightCircle className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
                </button>
              </div>
            </CardFooter>
          </Card>
          
          {/* Product 2 - Trade-X-Pert */}
          <Card className="premium-card animate-on-scroll opacity-0 group">
            <div className="h-2 bg-forex-green rounded-t-xl"></div>
            <CardHeader className="pt-8 pb-0">
              <div className="flex items-start justify-between">
                <div>
                  <div className="mb-4 p-3 bg-forex-green/10 rounded-lg inline-block group-hover:bg-forex-green/20 transition-colors">
                    <Code className="text-forex-green" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Trade-X-Pert EA</h3>
                </div>
                <div className="bg-forex-lightgray py-1 px-3 rounded-full text-xs font-medium text-forex-gray">Professional</div>
              </div>
              <p className="text-forex-gray mb-6">
                A sophisticated Expert Advisor for professional traders looking for customizable
                parameters and advanced analytics.
              </p>
            </CardHeader>
            
            <CardContent className="pt-0">
              <h4 className="text-lg font-medium mb-4">Key Features:</h4>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 bg-forex-green/10 rounded-full flex items-center justify-center mt-0.5 mr-3
                    group-hover:bg-forex-green/20 transition-colors">
                    <TrendingUp className="text-forex-green" size={14} />
                  </div>
                  <span className="text-forex-gray">Multi-timeframe analysis</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 bg-forex-green/10 rounded-full flex items-center justify-center mt-0.5 mr-3
                    group-hover:bg-forex-green/20 transition-colors">
                    <BarChart className="text-forex-green" size={14} />
                  </div>
                  <span className="text-forex-gray">Automatic compounding option</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 bg-forex-green/10 rounded-full flex items-center justify-center mt-0.5 mr-3
                    group-hover:bg-forex-green/20 transition-colors">
                    <Shield className="text-forex-green" size={14} />
                  </div>
                  <span className="text-forex-gray">Advanced entry/exit optimization</span>
                </li>
              </ul>
            </CardContent>
            
            <CardFooter>
              <div className="flex justify-center w-full">
                <button 
                  onClick={scrollToContact}
                  className="button-primary shine-effect flex items-center group"
                >
                  Contact for More
                  <ArrowRightCircle className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
                </button>
              </div>
            </CardFooter>
          </Card>
        </div>
        
        <Card className="animate-on-scroll opacity-0 premium-card">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold mb-6 text-center">Why Our Products Stand Out</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-4 rounded-xl bg-forex-lightgray hover:bg-forex-green/5 transition-colors duration-300">
                <div className="w-10 h-10 bg-forex-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="text-forex-green" size={20} />
                </div>
                <h4 className="font-medium mb-2 text-center">No Martingale Risk</h4>
                <p className="text-sm text-forex-gray text-center">We never use dangerous compounding strategies</p>
              </div>
              
              <div className="p-4 rounded-xl bg-forex-lightgray hover:bg-forex-green/5 transition-colors duration-300">
                <div className="w-10 h-10 bg-forex-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="text-forex-green" size={20} />
                </div>
                <h4 className="font-medium mb-2 text-center">Smart Algorithms</h4>
                <p className="text-sm text-forex-gray text-center">Sophisticated pattern recognition</p>
              </div>
              
              <div className="p-4 rounded-xl bg-forex-lightgray hover:bg-forex-green/5 transition-colors duration-300">
                <div className="w-10 h-10 bg-forex-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BarChart className="text-forex-green" size={20} />
                </div>
                <h4 className="font-medium mb-2 text-center">Risk Management</h4>
                <p className="text-sm text-forex-gray text-center">Built-in protection for your capital</p>
              </div>
              
              <div className="p-4 rounded-xl bg-forex-lightgray hover:bg-forex-green/5 transition-colors duration-300">
                <div className="w-10 h-10 bg-forex-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="text-forex-green" size={20} />
                </div>
                <h4 className="font-medium mb-2 text-center">Regular Updates</h4>
                <p className="text-sm text-forex-gray text-center">Continuous improvement and optimization</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProductsSection;

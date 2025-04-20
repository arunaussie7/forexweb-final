import { Target, ArrowUp, LineChart } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-premium opacity-50 pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-forex-green/5 rounded-full"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-forex-green/5 rounded-full"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <div className="h-1 w-20 bg-forex-green mx-auto mb-6"></div>
          <p className="text-forex-gray max-w-3xl mx-auto">
            Crafting innovative algorithmic trading solutions for traders worldwide since 2018
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll opacity-0">
            <h3 className="text-2xl font-semibold mb-6">Our Story</h3>
            <p className="text-forex-gray mb-6">
              With over five years of trading experience, I began exploring automation and algorithmic strategies alongside my brother, a seasoned financial analyst. While a delayed academic transition gave me an unexpected six-month gap, it became the perfect window to turn vision into reality.
            </p>
            <p className="text-forex-gray mb-6">
              During that time, we launched our startup, combining my passion for trading with my brother's industry insight. Despite early setbacks in the forex market, we used those lessons to build a more resilient and strategic foundation.
            </p>
            <p className="text-forex-gray mb-8">
              Today, our company reflects that journey — one of learning, persistence, and a shared mission to make trading smarter and more accessible.
            </p>
            
            <div className="flex justify-center bg-forex-lightgray p-6 rounded-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-forex-green mb-1">5+</div>
                <div className="text-sm text-forex-gray">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-on-scroll opacity-0">
            <Card className="premium-card p-6 group">
              <div className="w-12 h-12 bg-forex-green/10 rounded-full flex items-center justify-center mb-4 
                group-hover:bg-forex-green/20 transition-all duration-300">
                <Target className="text-forex-green" size={24} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Our Vision</h4>
              <p className="text-forex-gray">
                To revolutionize forex trading through innovative algorithms that deliver consistent results.
              </p>
            </Card>
            
            <Card className="premium-card p-6 group">
              <div className="w-12 h-12 bg-forex-green/10 rounded-full flex items-center justify-center mb-4
                group-hover:bg-forex-green/20 transition-all duration-300">
                <ArrowUp className="text-forex-green" size={24} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Our Mission</h4>
              <p className="text-forex-gray">
                Providing transparent, technology-driven solutions that automate trading strategies.
              </p>
            </Card>
            
            <Card className="premium-card p-6 group sm:col-span-2">
              <div className="w-12 h-12 bg-forex-green/10 rounded-full flex items-center justify-center mb-4
                group-hover:bg-forex-green/20 transition-all duration-300">
                <LineChart className="text-forex-green" size={24} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Our Expertise</h4>
              <p className="text-forex-gray">
                With over 5 years of combined experience in forex markets and algorithmic development, 
                our team brings technical expertise and market knowledge to every solution we create.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

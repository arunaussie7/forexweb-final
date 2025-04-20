import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import TickerStrip from '../components/TickerStrip';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import DevelopmentSection from '../components/DevelopmentSection';
import ProductsSection from '../components/ProductsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import useScrollAnimation from '../hooks/useScrollAnimation';
import PerformanceSection from '../components/PerformanceSection';

const Index = () => {
  // Initialize the scroll animation
  useScrollAnimation();
  
  // Set the title
  useEffect(() => {
    document.title = 'The Forex Company - Smart. Secure. Algorithmic.';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <TickerStrip />
      <main>
        <HeroSection />
        <AboutSection />
        <PerformanceSection />
        <DevelopmentSection />
        <ProductsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

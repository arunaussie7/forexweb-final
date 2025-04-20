import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderNavItem = (item: string) => {
    if (item === 'about') {
      return (
        <Link
          to="/about"
          className="text-forex-black hover:text-forex-green font-medium transition-colors"
          onClick={() => setIsOpen(false)}
        >
          About Us
        </Link>
      );
    }
    return (
      <button
        onClick={() => scrollToSection(item)}
        className="text-forex-black hover:text-forex-green font-medium transition-colors"
      >
        {item === 'home' ? 'Home' : 
        item === 'development' ? 'Custom Development' : 
        item === 'products' ? 'Products' : 
        'Contact Us'}
      </button>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center overflow-visible">
            <Link to="/">
              <img 
                src="/TheforexCompany.png" 
                alt="The Forex Company Logo" 
                className="h-64 w-auto transition-transform duration-300 hover:scale-105" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'development', 'products', 'contact'].map((item) => (
              <div key={item}>
                {renderNavItem(item)}
              </div>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-forex-black focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="flex flex-col px-4 pt-2 pb-4 space-y-4">
              {['home', 'about', 'development', 'products', 'contact'].map((item) => (
                <div key={item}>
                  {renderNavItem(item)}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <img 
              src="/TheforexCompany.png"
              alt="The Forex Company Logo"
              className="h-64 w-auto mb-6"
            />
            <p className="text-gray-600 text-sm">
              The Forex Company provides smart, secure algorithmic trading solutions to help traders automate their success in the forex market.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/development" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Custom Development
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Risk Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Email: theforexcompany388@gmail.com</li>
              <li className="text-gray-600">Phone 1: +91 90190 08967</li>
              <li className="text-gray-600">Phone 2: +91 72045 50007</li>
              <li className="text-gray-600">Location: Bangalore, India</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t">
          <p className="text-center text-gray-600 text-sm">
            © 2025 The Forex Company. All rights reserved.
          </p>
        </div>
      </div>
      
      <div className="bg-gray-50 py-4">
        <div className="section-container flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-forex-gray mb-4 md:mb-0">
            <p>Trading involves risk. Results not guaranteed.</p>
          </div>
          <button 
            onClick={scrollToTop}
            className="bg-forex-green text-white p-3 rounded-full shadow-md hover:bg-forex-darkgreen transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

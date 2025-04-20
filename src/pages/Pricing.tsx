import React from 'react';
import PricingSection from '../components/PricingSection';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your Trading Journey
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get access to our powerful trading bot with plans designed to fit your trading needs.
            All plans come with our core features and dedicated support.
          </p>
        </div>
      </div>

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Can I upgrade my plan later?</h3>
            <p className="text-gray-600">
              Yes, you can upgrade your plan at any time. The remaining value of your current plan will be prorated and applied to your new plan.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Is there a trial period?</h3>
            <p className="text-gray-600">
              We offer a demo account for you to test our trading bot before subscribing to any plan.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">What payment methods do you accept?</h3>
            <p className="text-gray-600">
              We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Can I use multiple trading accounts?</h3>
            <p className="text-gray-600">
              Yes, all our plans support one live trading account. If you need more accounts, please contact our support team.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Trading?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of successful traders using our automated trading solution.
          </p>
          <button className="bg-forex-green text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-forex-green/90 transition-colors duration-200">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing; 
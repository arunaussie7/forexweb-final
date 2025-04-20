import { useState } from 'react';
import { Mail, MessageSquare, Send, ChevronRight, Clock, Phone } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare email content
    const subject = `New Contact Form Submission from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

---
Sent from TheForexCompany Website Contact Form
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:theforexcompany388@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.03] pointer-events-none"></div>
      <div className="blob-animation bg-forex-green/10 w-[500px] h-[500px] rounded-full -bottom-64 -right-64"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <div className="h-1 w-20 bg-forex-green mx-auto mb-6"></div>
          <p className="text-forex-gray max-w-3xl mx-auto">
            Have questions about our products or need a custom solution? 
            Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 animate-on-scroll opacity-0">
            <Card className="premium-card h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 w-12 h-12 bg-forex-green/10 rounded-full flex items-center justify-center mr-4
                      group-hover:bg-forex-green/20 transition-all duration-300">
                      <Mail className="text-forex-green" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Email Us</h4>
                      <a href="mailto:theforexcompany388@gmail.com" className="text-forex-gray hover:text-forex-green transition-colors">
                        theforexcompany388@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 w-12 h-12 bg-forex-green/10 rounded-full flex items-center justify-center mr-4
                      group-hover:bg-forex-green/20 transition-all duration-300">
                      <Phone className="text-forex-green" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Phone Support</h4>
                      <div className="space-y-1">
                        <a href="tel:+919019008967" className="block text-forex-gray hover:text-forex-green transition-colors">
                          +91 90190 08967
                        </a>
                        <a href="tel:+917204550007" className="block text-forex-gray hover:text-forex-green transition-colors">
                          +91 72045 50007
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-gray-100">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-forex-green/10 rounded-full flex items-center justify-center mr-4">
                      <Clock className="text-forex-green" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-3">Location</h4>
                      <p className="text-forex-gray mb-2">
                        Bangalore, India
                      </p>
                      <p className="text-forex-gray">
                        We typically respond to all inquiries within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-3 animate-on-scroll opacity-0">
            <Card className="premium-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block text-sm font-medium text-forex-black mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forex-green/30 focus:border-forex-green"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium text-forex-black mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forex-green/30 focus:border-forex-green"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="message" 
                      className="block text-sm font-medium text-forex-black mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forex-green/30 focus:border-forex-green"
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="button-primary shine-effect w-full flex items-center justify-center group"
                  >
                    <Send className="mr-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
                    Send Message
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

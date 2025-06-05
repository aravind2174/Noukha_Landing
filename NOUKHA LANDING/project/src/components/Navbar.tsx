import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calendlyLink = 'https://calendly.com/noukha/30mins?embed_domain=noukha.in&hide_landing_page_details=1&hide_gdpr_banner=1';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <img
            src="https://noukha.in/static/media/noukha-long-logo.487144d20514b2920304.png"
            alt="Noukha RMS"
            className="h-8 w-auto"
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#benefits" className="text-gray-700 hover:text-green-600 transition-colors">Features</a>
            <a href="#use-cases" className="text-gray-700 hover:text-green-600 transition-colors">Use Cases</a>
            <a href="#pricing" className="text-gray-700 hover:text-green-600 transition-colors">Pricing</a>
            <a href="#faq" className="text-gray-700 hover:text-green-600 transition-colors">FAQ</a>
            <a
              href={calendlyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Book a Demo
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#benefits" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-green-600 py-2">Features</a>
            <a href="#use-cases" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-green-600 py-2">Use Cases</a>
            <a href="#pricing" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-green-600 py-2">Pricing</a>
            <a href="#faq" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-green-600 py-2">FAQ</a>
            <a
              href={calendlyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 text-center transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Book a Demo
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

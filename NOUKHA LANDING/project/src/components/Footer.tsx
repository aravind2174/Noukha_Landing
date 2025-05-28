import React from 'react';
import { Mail, Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white">About Us</h2>
            </div>
            <p className="text-gray-400 mb-6">
              Noukha Technologies is empowering restaurants with smart technology solutions to streamline operations and maximize profitability.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/noukha/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/noukha_technologies?igsh=MXMzNGQxeHFqZ3BoZg== " className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61576343432138#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://x.com/official_noukha" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#benefits" className="text-gray-400 hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#use-cases" className="text-gray-400 hover:text-white transition-colors">Use Cases</a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <span className="text-gray-400">hello@noukha.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-500 text-center text-sm">
            &copy; {new Date().getFullYear()} Noukha Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



import React from 'react';
import Button from './ui/Button';
import { Calendar, CheckCircle } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Let's Talk Growth
          </h2>
          <p className="text-xl text-gray-600">
            Every restaurant is different — that's why we start with a free 1-on-1 demo.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-2/3 md:pr-12 mb-8 md:mb-0">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Book Your Personalized Demo
                </h3>
                <p className="text-gray-600 mb-6">
                  See how Noukha RMS can be tailored to your restaurant's specific needs with a personalized demonstration from our product experts.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Customized to your restaurant type",
                    "Learn about features relevant to your business",
                    "Get your questions answered in real-time",
                    "Discuss implementation and pricing options",
                    "No pressure, no commitment required"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-500 italic">
                  No upfront cost. No credit card needed.
                </p>
              </div>
              <div className="w-full md:w-1/3">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-center mb-4 text-gray-900">
                    Schedule Now
                  </h4>
                  <Button 
                    href="https://calendly.com/aravindkannan-noukha/30min" 
                    variant="primary"
                    fullWidth
                    target="_blank"
                    rel="noopener noreferrer"
                    id="demo"
                  >
                    Book a Free Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

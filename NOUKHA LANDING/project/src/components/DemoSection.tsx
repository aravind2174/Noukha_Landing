import React from 'react';
import DemoForm from './DemoForm';

const DemoSection: React.FC = () => {
  return (
    <section id="demo" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Ready to Transform Your Restaurant?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Schedule a personalized demo with our product experts who will:
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-600 font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Understand Your Business</h4>
                    <p className="text-gray-600">We'll learn about your restaurant's specific needs and challenges.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-600 font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Demonstrate Relevant Features</h4>
                    <p className="text-gray-600">See how Noukha RMS specifically addresses your operational needs.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-600 font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Customize a Solution</h4>
                    <p className="text-gray-600">Get a tailored implementation plan and pricing based on your requirements.</p>
                  </div>
                </li>
              </ul>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-600">
                      "Noukha RMS will help in streamlining your operations across multiple outlets. Order processing time & Operational cost will be reduced by 40%  in just 3 months."
                    </p>
                    <p className="mt-2 text-sm font-medium text-gray-900">
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <DemoForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;

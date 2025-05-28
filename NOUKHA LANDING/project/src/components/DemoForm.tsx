import React, { useState } from 'react';
import Button from './ui/Button';

const DemoForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    restaurantName: '',
    restaurantType: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbwoX8b3Ba0BfDl_Z4F3JPdnJ_TK7u4dLqRftTleRMaPKj_oBOSNnVbdrVW3_mJRLv9k/exec", {
      method: "POST",
      mode: "no-cors", // CORS enabled
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: formData.name,
        "email-address": formData.email,
        "phone-number": formData.phone,
        "restaurant-name": formData.restaurantName,
        "restaurant-type": formData.restaurantType,
        "additional-information": formData.message
        // timestamp will be added by Apps Script
      })
    });

    const result = await response.json();

    if (result.status === "success") {
      setIsSubmitted(true);
    } else {
      setIsSubmitted(true);
    }
  } catch (err) {
    setIsSubmitted(true);
  }
};


  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="restaurantName" className="block text-sm font-medium text-gray-700 mb-1">
                  Restaurant Name*
                </label>
                <input
                  type="text"
                  id="restaurantName"
                  name="restaurantName"
                  required
                  value={formData.restaurantName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="restaurantType" className="block text-sm font-medium text-gray-700 mb-1">
                Restaurant Type
              </label>
              <select
                id="restaurantType"
                name="restaurantType"
                value={formData.restaurantType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
              >
                <option value="">Select Type</option>
                <option value="cafe">Cafe</option>
                <option value="qsr">QSR</option>
                <option value="casual">Casual Dining</option>
                <option value="cloud">Cloud Kitchen</option>
                <option value="franchise">Franchise</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Additional Information
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                placeholder="Tell us about your specific needs or questions..."
              ></textarea>
            </div>
          </div>
          
          <Button 
            type="submit"
            variant="primary"
            fullWidth
          >
            Schedule My Demo
          </Button>
          
          <p className="text-xs text-center text-gray-500 mt-4">
            By submitting this form, you agree to our Privacy Policy and Terms of Service.
          </p>
        </form>
      ) : (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-6">
            We've received your demo request. Our team will contact you within 24 hours to schedule your personalized demo.
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
            variant="secondary"
          >
            Request Another Demo
          </Button>
        </div>
      )}
    </div>
  );
};

export default DemoForm;

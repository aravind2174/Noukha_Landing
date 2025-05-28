import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200 py-5">
      <button 
        onClick={toggleOpen}
        className="flex justify-between items-center w-full text-left focus:outline-none"
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <span>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-green-600" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </span>
      </button>
      <div 
        className={`mt-2 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: "What is Noukha RMS, and how does it help my restaurant?",
      answer: "Noukha RMS is an all-in-one restaurant management system that streamlines online ordering, payments, menu updates, and delivery — all in real time."
    },
    {
      question: "Can I integrate Noukha RMS with my existing POS system?",
      answer: "Yes. Noukha RMS offers seamless integration with most major POS systems, allowing you to sync orders, inventory, and customer data effortlessly."
    },
    {
      question: "Does the system support third-party delivery platforms?",
      answer: "Absolutely. Noukha RMS lets you manage both in-house and third-party delivery partners from one dashboard — with live tracking and ETAs."
    },
    {
      question: "How fast can I get started?",
      answer: "You can go live in under 2 hours with full onboarding support from our team. We'll guide you through the setup process and help you configure the system according to your needs."
    },
    {
      question: "Do I need tech skills to use it?",
      answer: "Absolutely not. If you can use a phone, you can run Noukha RMS. The interface is intuitive and user-friendly, designed for restaurant staff of all technical abilities."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get quick answers to common questions about Noukha RMS.
            </p>
          </div>
          
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggleOpen={() => toggleFaq(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
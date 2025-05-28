import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Footer from './components/Footer';
import DemoSection from './components/DemoSection';

function App() {
  useEffect(() => {
    // Update page title
    document.title = "Noukha RMS - Restaurant Management System";
    
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.hash && target.hash.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Benefits />
      <UseCases />
      <Pricing />
      <DemoSection />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
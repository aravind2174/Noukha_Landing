import React from 'react';

const ExpertProfile: React.FC = () => {
  return (
    <section id="expert" className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Meet Your Expert</h2>
          <div className="w-20 h-1 bg-[#FF0200] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn directly from a successful entrepreneur who has built a thriving tech-driven franchise business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden rounded-xl shadow-xl relative z-10">
              <img
                src="/https://assets.coffeemug.ai/li-files/image-d30730e4-4a94-476f-b6c5-f470d8b53f20.jpg"
                alt="Prabhakaran Venugopal"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#FF0200] rounded-full opacity-10 z-0"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-black rounded-full opacity-10 z-0"></div>
          </div>
          
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-3">Prabhakaran Venugopal</h3>
            <p className="text-[#FF0200] font-medium mb-6">
              Founder & CEO, Cup Time
            </p>
            
            <div className="space-y-6 text-gray-700">
              <p>
                Prabhakaran Venugopal is the visionary founder of Cup Time, a revolutionary 
                tech-driven B2B subscription-based franchise business that has transformed 
                the beverage delivery landscape in South India.
              </p>
              
              <p>
                Starting from Madurai, Cup Time has successfully expanded to Coimbatore, 
                bringing innovation to the traditional beverage industry through its unique 
                franchise model and tech-enabled operations.
              </p>
              
              <p>
                With a passion for mentoring entrepreneurs, Prabhakaran has guided over 100 
                students and professionals in their business journey, sharing insights from 
                his experience in building and scaling Cup Time.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <p className="text-3xl font-bold text-[#FF0200]">100+</p>
                <p className="text-gray-600 text-sm">Students Mentored</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <p className="text-3xl font-bold text-[#FF0200]">2</p>
                <p className="text-gray-600 text-sm">Major Cities</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <p className="text-3xl font-bold text-[#FF0200]">B2B</p>
                <p className="text-gray-600 text-sm">Tech Innovation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertProfile;
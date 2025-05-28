import React, { useState } from 'react';
import Button from './ui/Button';
import { PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const videoId = '5kDYtWjIfOQ';
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              The Future of Restaurant Management Starts Here
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              From order to insights — manage it all with Noukha RMS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="#demo" variant="primary">
                Book a Free Demo
              </Button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 lg:pl-12">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden relative group">
              <div className="aspect-w-16 aspect-h-9 w-full">
                {isVideoOpen ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    className="w-full h-full rounded-xl"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Noukha RMS Demo"
                  ></iframe>
                ) : (
                  <div
                    className="relative w-full h-full cursor-pointer"
                    onClick={() => setIsVideoOpen(true)}
                  >
                    <img
                      src={thumbnailUrl}
                      alt="Noukha RMS Video"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PlayCircle className="h-16 w-16 text-white bg-black bg-opacity-50 rounded-full p-2 hover:scale-105 transition-transform" />
                    </div>
                  </div>
                )}
              </div>
              <div className="p-4 bg-white">
                <p className="text-sm text-center text-gray-500">
                  See how Noukha RMS transforms restaurant operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

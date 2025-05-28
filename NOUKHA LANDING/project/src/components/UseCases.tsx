import React from 'react';
import { Coffee, UtensilsCrossed, FastForward, ChefHat, Building } from 'lucide-react';

interface UseCaseProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const UseCase: React.FC<UseCaseProps> = ({ icon, title, description }) => {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-4">
        <div className="text-green-600">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const UseCases: React.FC = () => {
  const useCases = [
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Cafes",
      description: "Perfect for managing fast-paced cafe operations with quick ordering and billing."
    },
    {
      icon: <FastForward className="w-8 h-8" />,
      title: "QSRs",
      description: "Streamline quick service restaurant workflows for maximum efficiency."
    },
    {
      icon: <UtensilsCrossed className="w-8 h-8" />,
      title: "Casual Dining",
      description: "Enhance the dining experience with smooth service and order management."
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: "Cloud Kitchens",
      description: "Coordinate multiple virtual brands and delivery services effortlessly."
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Franchise Outlets",
      description: "Maintain consistent operations across all your franchise locations."
    }
  ];

  return (
    <section id="use-cases" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Designed for Every Restaurant Type
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you run a small cafe or a chain of restaurants, Noukha RMS adapts to your needs.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
          {useCases.map((useCase, index) => (
            <UseCase 
              key={index} 
              icon={useCase.icon} 
              title={useCase.title} 
              description={useCase.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
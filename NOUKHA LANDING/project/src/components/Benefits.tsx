import { 
  Receipt, 
  Truck, 
  LayoutGrid, 
  Gift, 
  LineChart 
} from 'lucide-react';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Benefit: React.FC<BenefitProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-4">
        <div className="text-green-600">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Benefits: React.FC = () => {
  const benefits = [
  {
    icon: <Receipt className="w-6 h-6" />,
    title: "Integrated Payment & Order Tracking",
    description: "Accept payments via UPI, cards, and wallets. Customers can track their order status in real time — boosting transparency and reducing support calls."
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Smart Delivery Management",
    description: "Route orders to in-house or 3rd-party delivery partners automatically. Use live maps, ETAs, and delivery tracking to streamline fulfillment and increase speed."
  },
  {
    icon: <LayoutGrid className="w-6 h-6" />,
    title: "Real-Time Menu Control",
    description: "Update prices, items, availability, and offers instantly across all platforms. Manage modifiers, combos, and item-level stock without calling your tech team."
  },
  {
    icon: <Gift className="w-6 h-6" />,
    title: "Loyalty, Upsell & CRM Built-In",
    description: "Drive repeat orders with coupons, loyalty points, and personalized upsell recommendations. Capture customer data and automate re-engagement via WhatsApp or SMS."
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Smart Analytics to Maximize Profits",
    description: "Gain valuable insights to optimize menu performance and increase revenue."
  }
];

  return (
    <section id="benefits" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Streamline Your Restaurant Operations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Noukha RMS provides all the tools you need to run your restaurant efficiently and profitably.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {benefits.map((benefit, index) => (
            <Benefit 
              key={index} 
              icon={benefit.icon} 
              title={benefit.title} 
              description={benefit.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

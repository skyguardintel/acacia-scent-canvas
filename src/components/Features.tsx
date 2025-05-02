
import { useEffect } from 'react';
import { PackageCheck, Truck, RefreshCw, Shield } from 'lucide-react';

const features = [
  {
    icon: <PackageCheck size={32} />,
    title: 'Premium Quality',
    description: 'Only the finest ingredients sourced from around the world.'
  },
  {
    icon: <Truck size={32} />,
    title: 'Free Shipping',
    description: 'Free worldwide shipping on all orders above $100.'
  },
  {
    icon: <RefreshCw size={32} />,
    title: 'Easy Returns',
    description: '30-day hassle-free return policy for your peace of mind.'
  },
  {
    icon: <Shield size={32} />,
    title: 'Secure Checkout',
    description: '100% secure payment processing for your safety.'
  }
];

const Features = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-6 animate-on-scroll"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-center mb-4">
                <div className="text-acacia-gold p-3 rounded-full bg-acacia-gold/10">
                  {feature.icon}
                </div>
              </div>
              <h3 className="font-playfair text-xl mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

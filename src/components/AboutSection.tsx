
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
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
    <section className="py-20 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative animate-on-scroll">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1593487568720-92097fb460fb?q=80&w=1780&auto=format&fit=crop"
                alt="About Acacia Perfumes"
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div className="absolute border-8 border-acacia-gold w-full h-[600px] -bottom-8 -right-8 z-0"></div>
          </div>

          {/* Content Column */}
          <div className="space-y-8 animate-on-scroll">
            <h2 className="heading-md text-acacia-gold">Our Story</h2>
            <h3 className="heading-lg text-acacia-black">Crafting Luxury Since 1995</h3>
            
            <div className="w-24 h-1 bg-acacia-gold"></div>
            
            <p className="text-gray-700">
              At Acacia Perfumes, we believe that fragrance is an art form—a personal 
              expression that leaves a lasting impression. Founded in 1995, our passion 
              for creating exceptional fragrances has grown into a legacy of luxury and 
              sophistication.
            </p>
            
            <p className="text-gray-700">
              Each Acacia perfume is meticulously crafted by master perfumers who blend 
              the finest ingredients from around the world. We take pride in our attention 
              to detail, from the selection of raw materials to the design of our 
              bottles, ensuring that every aspect of our products exudes elegance.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <h4 className="font-playfair text-xl mb-2">25+</h4>
                <p className="text-gray-600 text-sm">Years of Experience</p>
              </div>
              <div>
                <h4 className="font-playfair text-xl mb-2">50+</h4>
                <p className="text-gray-600 text-sm">Unique Fragrances</p>
              </div>
              <div>
                <h4 className="font-playfair text-xl mb-2">12</h4>
                <p className="text-gray-600 text-sm">Master Perfumers</p>
              </div>
              <div>
                <h4 className="font-playfair text-xl mb-2">100%</h4>
                <p className="text-gray-600 text-sm">Quality Ingredients</p>
              </div>
            </div>
            
            <Button
              asChild
              className="bg-acacia-gold hover:bg-acacia-gold-dark text-black border-none py-6 px-8 text-sm rounded-none"
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

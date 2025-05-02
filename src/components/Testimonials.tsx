
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Acacia Perfumes offers the most exquisite fragrances I've ever experienced. The attention to detail and quality is unmatched.",
    author: "Emily Johnson",
    title: "Loyal Customer"
  },
  {
    id: 2,
    content: "I've been using Acacia's perfumes for years and have received countless compliments. Their scents are unique and long-lasting.",
    author: "Michael Chen",
    title: "Perfume Enthusiast"
  },
  {
    id: 3,
    content: "The Oriental Collection is absolutely divine. It transports me to another place and time with every spray.",
    author: "Sarah Williams",
    title: "Fashion Blogger"
  },
  {
    id: 4,
    content: "As someone who works in the fashion industry, I appreciate the craftsmanship and attention to detail that goes into every Acacia perfume.",
    author: "David Miller",
    title: "Fashion Designer"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

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
    <section className="py-20 bg-acacia-black">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="heading-md text-acacia-gold mb-2">Testimonials</h2>
          <h3 className="heading-lg text-white mb-6">What Our Customers Say</h3>
          <div className="w-24 h-1 bg-acacia-gold mx-auto"></div>
        </div>

        <div className="relative max-w-4xl mx-auto animate-on-scroll">
          {/* Testimonial Slider */}
          <div className="overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 text-center">
                    <svg className="w-10 h-10 mx-auto mb-6 text-acacia-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-lg md:text-xl text-white/90 mb-6">{testimonial.content}</p>
                    <div>
                      <h4 className="font-playfair text-acacia-gold text-lg">{testimonial.author}</h4>
                      <p className="text-white/70">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={handlePrev}
              className="bg-acacia-black border border-acacia-gold/30 hover:border-acacia-gold text-acacia-gold p-2 rounded-full transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex ? 'bg-acacia-gold w-4' : 'bg-white/30'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={handleNext}
              className="bg-acacia-black border border-acacia-gold/30 hover:border-acacia-gold text-acacia-gold p-2 rounded-full transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

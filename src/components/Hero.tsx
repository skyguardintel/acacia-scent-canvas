
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: 'public/lovable-uploads/a7f020b8-0bbb-453b-bb56-a0898833c848.png',
    title: 'Exquisite Fragrances',
    subtitle: 'Discover the Essence of Luxury',
    description: 'Handcrafted perfumes that embody elegance and sophistication.',
    buttonText: 'Shop Now',
    buttonLink: '/shop'
  },
  {
    image: 'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?q=80&w=1974&auto=format&fit=crop',
    title: 'New Collection',
    subtitle: 'The Art of Perfumery',
    description: 'Experience our latest fragrances created by master perfumers.',
    buttonText: 'Explore',
    buttonLink: '/collections'
  },
  {
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=1916&auto=format&fit=crop',
    title: 'Gift Sets',
    subtitle: 'Perfect for Every Occasion',
    description: 'Luxurious gift sets that make every moment special.',
    buttonText: 'View Sets',
    buttonLink: '/gift-sets'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Slide Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-acacia-black/50" />
          </div>
          
          {/* Slide Content */}
          <div className="relative h-full flex items-center">
            <div className="container-custom mt-16">
              <div className="max-w-xl space-y-6 animate-fade-in">
                <h2 className="text-acacia-gold font-playfair text-xl md:text-2xl font-medium">
                  {slide.subtitle}
                </h2>
                <h1 className="text-white font-playfair text-4xl md:text-5xl lg:text-6xl font-bold">
                  {slide.title}
                </h1>
                <p className="text-white/90 text-base md:text-lg">
                  {slide.description}
                </p>
                <Button
                  asChild
                  className="bg-acacia-gold hover:bg-acacia-gold-dark text-black border-none py-6 px-8 text-sm rounded-none"
                >
                  <Link to={slide.buttonLink}>{slide.buttonText}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-acacia-black/30 hover:bg-acacia-black/50 text-white p-2 rounded-full transition-colors z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-acacia-black/30 hover:bg-acacia-black/50 text-white p-2 rounded-full transition-colors z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-acacia-gold' : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;

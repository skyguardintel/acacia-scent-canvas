
import { useEffect, useRef } from 'react';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Sample product data
const products = [
  {
    id: '1',
    name: 'Amour',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1780&auto=format&fit=crop',
    price: 549,
    originalPrice: 699,
    isNew: true,
    isSale: true
  },
  {
    id: '2',
    name: 'Momento',
    image: 'https://images.unsplash.com/photo-1595425959440-5873c8622193?q=80&w=1780&auto=format&fit=crop',
    price: 549,
    originalPrice: 699,
    isNew: false,
    isSale: true
  },
  {
    id: '3',
    name: 'Monage',
    image: 'https://images.unsplash.com/photo-1615368144592-49e8082c65c5?q=80&w=1792&auto=format&fit=crop',
    price: 599,
    originalPrice: 799,
    isNew: false,
    isSale: true
  },
  {
    id: '4',
    name: 'Angel',
    image: 'https://images.unsplash.com/photo-1601295452898-78a8dd904ab3?q=80&w=1887&auto=format&fit=crop',
    price: 399,
    originalPrice: 499,
    isNew: false,
    isSale: true
  }
];

const FeaturedProducts = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-10 animate-on-scroll">
          <h2 className="heading-md text-acacia-gold mb-2">Our Selection</h2>
          <h3 className="heading-lg text-acacia-black mb-6">Featured Products</h3>
          <div className="w-24 h-1 bg-acacia-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-on-scroll">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              originalPrice={product.originalPrice}
              isNew={product.isNew}
              isSale={product.isSale}
            />
          ))}
        </div>

        <div className="mt-12 text-center animate-on-scroll">
          <Button
            asChild
            className="bg-acacia-gold hover:bg-acacia-gold-dark text-black border-none py-6 px-8 text-sm rounded-none"
          >
            <Link to="/shop">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

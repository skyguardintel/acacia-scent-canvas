
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const collections = [
  {
    id: '1',
    name: 'Signature Collection',
    image: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?q=80&w=1974&auto=format&fit=crop',
    description: 'Our flagship collection featuring iconic Acacia fragrances.',
    link: '/collections/signature'
  },
  {
    id: '2',
    name: 'Luxury Collection',
    image: 'https://images.unsplash.com/photo-1557053506-9a359bef1d49?q=80&w=1974&auto=format&fit=crop',
    description: 'Premium perfumes for the most discerning customers.',
    link: '/collections/luxury'
  },
  {
    id: '3',
    name: 'Oriental Collection',
    image: './lovable-uploads/1e467098-ee74-4f19-893f-7b3380a2ba51.png',
    description: 'Exotic fragrances inspired by the mysteries of the East.',
    link: '/collections/oriental'
  }
];

const CollectionsShowcase = () => {
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
          <h2 className="heading-md text-acacia-gold mb-2">Discover</h2>
          <h3 className="heading-lg text-white mb-6">Our Collections</h3>
          <div className="w-24 h-1 bg-acacia-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div 
              key={collection.id} 
              className="relative group overflow-hidden animate-on-scroll"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Background Image */}
              <div 
                className="aspect-[3/4] w-full bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${collection.image})`,
                }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-acacia-black/80 via-acacia-black/40 to-transparent transition-opacity duration-500">
                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                  <h3 className="font-playfair text-2xl text-white mb-2">{collection.name}</h3>
                  <p className="text-white/80 mb-4 text-sm line-clamp-2">{collection.description}</p>
                  <Link
                    to={collection.link}
                    className="inline-block text-acacia-gold border-b border-acacia-gold pb-1 text-sm hover:text-white transition-colors duration-300"
                  >
                    Explore Collection
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsShowcase;

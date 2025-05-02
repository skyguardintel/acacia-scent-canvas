
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Thank you for subscribing to our newsletter!');
      setEmail('');
    } else {
      toast.error('Please enter your email address.');
    }
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
    <section 
      className="py-20 relative bg-cover bg-center"
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?q=80&w=2070&auto=format&fit=crop)' }}
    >
      <div className="absolute inset-0 bg-acacia-black/70 backdrop-blur-sm"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-2xl mx-auto text-center animate-on-scroll">
          <h2 className="heading-md text-acacia-gold mb-2">Stay Connected</h2>
          <h3 className="heading-lg text-white mb-6">Subscribe to Our Newsletter</h3>
          <div className="w-24 h-1 bg-acacia-gold mx-auto mb-8"></div>
          <p className="text-white/90 mb-8">
            Be the first to know about new collections, exclusive offers, and perfumery insights.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-acacia-gold"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button 
              type="submit"
              className="bg-acacia-gold hover:bg-acacia-gold-dark text-black px-6 py-3 font-medium transition-colors"
            >
              Subscribe
            </button>
          </form>
          
          <p className="text-white/60 text-sm mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

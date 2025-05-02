
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import CollectionsShowcase from '@/components/CollectionsShowcase';
import AboutSection from '@/components/AboutSection';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import { toast } from 'sonner';

const Index = () => {
  useEffect(() => {
    // Initialize scroll animations
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

    // Welcome toast
    toast("Welcome to Acacia Perfumes", {
      description: "Discover our exclusive collection of luxury fragrances",
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <FeaturedProducts />
      <CollectionsShowcase />
      <AboutSection />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;

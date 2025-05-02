
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-acacia-black">
        <div className="text-center px-4">
          <h1 className="text-acacia-gold font-playfair text-9xl font-bold mb-4">404</h1>
          <p className="text-white text-xl mb-8">The page you're looking for can't be found.</p>
          <Link 
            to="/"
            className="inline-block bg-acacia-gold text-black px-6 py-3 font-medium hover:bg-acacia-gold-dark transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;

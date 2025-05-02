
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-acacia-black/90 backdrop-blur-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <div className="text-acacia-gold font-playfair text-2xl font-bold flex items-center gap-2">
            <span className="text-3xl">✦</span> ACACIA
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-white hover:text-acacia-gold transition-colors"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="text-white hover:text-acacia-gold transition-colors"
          >
            Shop
          </Link>
          <Link
            to="/collections"
            className="text-white hover:text-acacia-gold transition-colors"
          >
            Collections
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-acacia-gold transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-acacia-gold transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-acacia-gold transition-colors">
            <Search size={20} />
          </button>
          <Link
            to="/account"
            className="text-white hover:text-acacia-gold transition-colors hidden sm:block"
          >
            <User size={20} />
          </Link>
          <Link
            to="/cart"
            className="text-white hover:text-acacia-gold transition-colors relative"
          >
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-acacia-gold text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>
          </Link>
          <Button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            variant="ghost"
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-acacia-black/95 backdrop-blur-md">
          <div className="container-custom py-6 flex flex-col space-y-4">
            <Link
              to="/"
              className="text-white hover:text-acacia-gold transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-white hover:text-acacia-gold transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/collections"
              className="text-white hover:text-acacia-gold transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Collections
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-acacia-gold transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-acacia-gold transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}

      {/* Free Shipping Banner */}
      <div className="bg-acacia-gold py-2 w-full">
        <p className="text-center text-sm text-black font-medium">
          FREE SHIPPING ON ALL ORDERS
        </p>
      </div>
    </header>
  );
};

export default Navbar;

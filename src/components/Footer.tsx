
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-acacia-black pt-16 pb-10 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and About */}
          <div className="space-y-6">
            <div className="text-acacia-gold font-playfair text-2xl font-bold flex items-center gap-2">
              <span className="text-3xl">✦</span> ACACIA
            </div>
            <p className="text-gray-300 text-sm">
              Luxury perfumes that capture the essence of sophistication and elegance.
              Handcrafted with attention to detail for a unique fragrance experience.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-acacia-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-acacia-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-acacia-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:info@acaciaperfumes.com" className="text-gray-300 hover:text-acacia-gold transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-playfair text-lg font-medium border-b border-acacia-gold/20 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-acacia-gold transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-acacia-gold transition-colors text-sm">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/collections" className="text-gray-300 hover:text-acacia-gold transition-colors text-sm">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-acacia-gold transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-acacia-gold transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-6">
            <h3 className="font-playfair text-lg font-medium border-b border-acacia-gold/20 pb-2">
              Customer Service
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/shipping" className="text-gray-300 hover:text-acacia-gold transition-colors text-sm">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-acacia-gold transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-acacia-gold transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-acacia-gold transition-colors text-sm">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="font-playfair text-lg font-medium border-b border-acacia-gold/20 pb-2">
              Newsletter
            </h3>
            <p className="text-gray-300 text-sm">
              Subscribe to our newsletter to receive updates on new products and special offers.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border border-gray-700 text-white px-4 py-2 rounded-sm focus:outline-none focus:border-acacia-gold"
              />
              <button
                type="submit"
                className="bg-acacia-gold text-acacia-black px-4 py-2 rounded-sm hover:bg-acacia-gold-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Acacia Perfumes. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <img
              src="https://via.placeholder.com/40x25/ffffff/000000?text=VISA"
              alt="Visa"
              className="h-6"
            />
            <img
              src="https://via.placeholder.com/40x25/ffffff/000000?text=MC"
              alt="Mastercard"
              className="h-6"
            />
            <img
              src="https://via.placeholder.com/40x25/ffffff/000000?text=AMEX"
              alt="American Express"
              className="h-6"
            />
            <img
              src="https://via.placeholder.com/40x25/ffffff/000000?text=PayPal"
              alt="PayPal"
              className="h-6"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

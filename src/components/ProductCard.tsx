
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { toast } from "sonner";

interface ProductProps {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard = ({ id, name, image, price, originalPrice, isNew, isSale }: ProductProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast.success(`${name} added to cart!`);
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    toast.success(isFavorite ? `${name} removed from wishlist` : `${name} added to wishlist!`);
  };

  const discountPercentage = originalPrice ? Math.round((1 - price / originalPrice) * 100) : 0;

  return (
    <Link to={`/product/${id}`}>
      <div
        className="group relative overflow-hidden bg-white transition-all duration-300 hover:shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Product Image */}
        <div className="relative overflow-hidden h-80">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Overlay actions */}
          <div
            className={`absolute inset-0 bg-acacia-black/20 flex flex-col items-center justify-center gap-4 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <button
              onClick={handleAddToCart}
              className="bg-acacia-gold hover:bg-acacia-gold-dark text-white p-3 rounded-full transform transition-transform duration-300 hover:scale-110"
              aria-label="Add to cart"
            >
              <ShoppingCart size={18} />
            </button>
            <button
              onClick={handleToggleFavorite}
              className={`p-3 rounded-full transform transition-all duration-300 hover:scale-110 ${
                isFavorite 
                ? 'bg-red-600 text-white' 
                : 'bg-white text-acacia-black hover:bg-acacia-gold hover:text-white'
              }`}
              aria-label="Add to wishlist"
            >
              <Heart size={18} />
            </button>
          </div>

          {/* Tags */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isNew && (
              <span className="bg-acacia-black text-white text-xs py-1 px-2 font-medium">
                NEW
              </span>
            )}
            {isSale && (
              <span className="bg-acacia-gold text-acacia-black text-xs py-1 px-2 font-medium">
                SALE {discountPercentage}%
              </span>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4 text-center">
          <h3 className="text-lg font-playfair font-medium text-acacia-black mb-2">
            {name}
          </h3>
          <div className="flex justify-center items-center gap-2">
            <span className="font-medium text-acacia-black">
              ${price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-gray-400 line-through text-sm">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

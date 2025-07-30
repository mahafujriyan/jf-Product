import React from 'react';
import { useCart } from '../../Pages/Context/CartProvider';

const AgriculturalCard = ({product}) => {
 const { addToCart } = useCart(); 

  const handleBuyNow = () => {
    addToCart(product);
  };
    return (
      <div className="w-[200px] bg-white shadow-md rounded-md overflow-hidden hover:shadow-xl transition">
      <img
        src={product.image || "https://via.placeholder.com/200"}
        alt={product.title}
        className="h-40 w-full object-cover"
      />
      <div className="p-3">
        <h3 className="text-sm font-semibold text-gray-800">{product.title}</h3>
        <p className="text-xs text-gray-600 mb-2">{product.subtitle}</p>
        <button   onClick={handleBuyNow}
         className="bg-lime-500 text-white px-3 py-1 text-xs rounded hover:bg-lime-600">
          Buy Now
        </button>
      </div>
    </div>
    );
};

export default AgriculturalCard;
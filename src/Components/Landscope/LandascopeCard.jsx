import React from 'react';
import { useCart } from '../../Pages/Context/CartProvider';
import { motion } from 'framer-motion';
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const LandscapeCard = ({item}) => {
  const { addToCart } = useCart(); 
  
    const handleBuyNow = () => {
      addToCart(item);
    };
    return (
         <motion.div  variants={cardVariants}
          className="w-[200px] bg-white shadow-md rounded-md overflow-hidden hover:shadow-xl transition">
      <img
        src={item.image || "https://via.placeholder.com/200"}
        alt={item.title}
        className="h-40 w-full object-cover"
      />
      <div className="p-3">
        <h3 className="text-sm font-semibold text-gray-800">{item.title}</h3>
        <p className="text-xs text-gray-600 mb-2">{item.subtitle}</p>
        <button onClick={handleBuyNow}
         className="bg-lime-500 text-white px-3 py-1 text-xs rounded hover:bg-lime-600">
          Buy Now
        </button>
      </div>
    </motion.div>
    );
};

export default LandscapeCard;
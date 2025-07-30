import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

 const CartProvider = ({ children }) => {
   const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prev => [...prev, product]);
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce((acc, item) => {
    const priceString = item.subtitle.split('–')[0]?.replace(/[₹,\s]/g, '') || '0';
    return acc + parseFloat(priceString);
  }, 0);

  return (
    <CartContext.Provider  value={{ cartItems, addToCart, removeFromCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;

export const useCart = () => useContext(CartContext);

import React from 'react';
import { useCart } from '../Context/CartProvider';

const CartPage = () => {
      const { cartItems, totalPrice,removeFromCart } = useCart();
    return (
     <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{item.subtitle}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 text-sm hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-6 text-right text-lg font-semibold text-gray-800">
          Total: ₹{totalPrice.toFixed(2)}
        </div>
      )}
    </div>
    );
};

export default CartPage;
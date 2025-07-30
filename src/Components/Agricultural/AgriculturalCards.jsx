import React, { useEffect, useState } from 'react';
import AgriculturalCard from './AgriculturalCard';
import Loader from '../../Loader/Loader';
import { motion } from 'framer-motion';
import CardAnimation from '../../Pages/Animation/CardAnimation';
const AgriculturalCards = () => {
    const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/Agri.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load products:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader></Loader>
  }
    return (
          <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-10 px-4"
    >
      <h2 className="text-xl font-semibold mb-4 text-center">Agricultural Products</h2>

      <CardAnimation className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <AgriculturalCard key={product.id} product={product} />
        ))}
      </CardAnimation>
    </motion.div>
    );
};

export default AgriculturalCards;
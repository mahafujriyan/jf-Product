import React, { useEffect, useState } from 'react';
import AgriculturalCard from './AgriculturalCard';
import Loader from '../../Loader/Loader';

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
         <div className="my-8 px-4">
      <h2 className="text-xl font-semibold mb-4">Agricultural Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4">
        {products.map((product) => (
          <AgriculturalCard key={product.id} product={product} />
        ))}
      </div>
    </div>
    );
};

export default AgriculturalCards;
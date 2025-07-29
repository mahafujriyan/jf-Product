import React, { useEffect, useState } from 'react';
import LandscapeCard from './LandascopeCard';
import Loader from '../../Loader/Loader';

const LandasecopeCards = () => {
       const [items, setItems] = useState([]);
      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        fetch('/Product.json')
          .then(res => res.json())
          .then(data => {
            setItems(data);
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
         <div className=" my-8 px-4">
      <h2 className="text-3xl font-semibold mb-4">Landscape Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   gap-4">
        {items.map((item) => (
          <LandscapeCard key={item.id} item={item} />
        ))}
      </div>
    </div>
    );
};

export default LandasecopeCards;
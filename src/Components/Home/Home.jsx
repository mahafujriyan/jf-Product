import React from 'react';
import AgriculturalCards from '../Agricultural/AgriculturalCards';
import LandasecopeCards from '../Landscope/Landasecopecards';
import Partners from '../Partners/Partners';

const Home = () => {
    return (
        <div>
         <AgriculturalCards></AgriculturalCards>
         <LandasecopeCards></LandasecopeCards>
         <Partners></Partners>
        </div>
    );
};

export default Home;
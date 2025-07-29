import React from 'react';
import AgriculturalCards from '../Agricultural/AgriculturalCards';

import Partners from '../Partners/Partners';
import LandasecopeCards from '../Landscope/LandasecopeCards';
import Use from '../Usees/Use';

const Home = () => {
    return (
        <div className='space-y-4'>
         <AgriculturalCards></AgriculturalCards>
         <LandasecopeCards></LandasecopeCards>
         <Partners></Partners>
         <Use></Use>
        </div>
    );
};

export default Home;
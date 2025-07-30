import React from 'react';
import AgriculturalCards from '../Agricultural/AgriculturalCards';

import Partners from '../Partners/Partners';
import LandasecopeCards from '../Landscope/LandasecopeCards';
import Use from '../Usees/Use';
import LoveUs from '../LoveUs/LoveUs';
import Branch from '../../Pages/User/Branch';
import HeroCard from './Hero/HeroCard';

const Home = () => {
    return (
        <div className='space-y-4'>
           <HeroCard></HeroCard>
         <AgriculturalCards></AgriculturalCards>
         <LandasecopeCards></LandasecopeCards>
         <Partners></Partners>
         <Use></Use>
         <LoveUs></LoveUs>
      <Branch></Branch>
        </div>
    );
};

export default Home;
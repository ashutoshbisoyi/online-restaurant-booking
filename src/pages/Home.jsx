import React from 'react';
import Hero from '../sections/home/hero/Hero';
import Restaurants from '../sections/home/restaurants/Restaurants';

const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <Restaurants />
    </div>
  );
};

export default Home;

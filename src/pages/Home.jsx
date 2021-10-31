import React from 'react';
import Hero from '../sections/home/hero/Hero';
import FeaturedRestaurants from '../sections/home/featured-restaurants/FeaturedRestaurants';

const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <FeaturedRestaurants />
    </div>
  );
};

export default Home;

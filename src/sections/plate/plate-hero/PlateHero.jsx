import React from 'react';
import AboutHeader from '../../about/header/AboutHeader';
import './PlateHero.scss';
const PlateHero = () => {
  return (
    <section className='container plate-hero'>
      <AboutHeader title='Your Plate' />
    </section>
  );
};

export default PlateHero;

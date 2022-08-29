import React from 'react';
import AboutContent from '../sections/about/about-content/AboutContent';
import AboutHeader from '../sections/about/header/AboutHeader';

const AboutUs = () => {
  return (
    <div className='container py-5'>
      <AboutHeader />
      <AboutContent />
    </div>
  );
};

export default AboutUs;

import React from 'react';
import headerBg from '../../../assets/about-header-bg.png';
import './AboutHeader.scss';
const AboutHeader = ({ title = 'About Us' }) => {
  return (
    <div>
      <div className='about-header'>
        <img src={headerBg} alt='illustration' className='bg-img' />
        <header>
          <h1>{title}</h1>
        </header>
      </div>
    </div>
  );
};

export default AboutHeader;

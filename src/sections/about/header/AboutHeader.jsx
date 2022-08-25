import React from 'react';
import headerBg from '../../../assets/about-header-bg.png';
import './AboutHeader.scss';
const AboutHeader = () => {
  return (
    <div>
      <div className='about-header'>
        <img src={headerBg} alt='illustration' className='bg-img' />
        <header>
          <h1>About Us</h1>
        </header>
      </div>
      <section className='py-5 text-center about-content'>
        <p>
          Eatit helps people to save TIME which is more Valuable than Money. It
          is because once you lose time, you will never get it back, not even a
          second of it.
        </p>
        <p>
          We help people to check menu in our platform and order their favourite
          food from favourite restaurant.
        </p>
        <p>
          The best part is as soon as someone completes the payment their food
          starts getting prepared in the restaurant.
        </p>
        <p>
          After reaching the restaurant you only need to provide your order ID
          and your food will be in your table within 5-10 minutes.
        </p>
        <p>
          <strong>"No more waiting time in restaurant for your food"</strong>
        </p>
      </section>
    </div>
  );
};

export default AboutHeader;

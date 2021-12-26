import React from 'react';
import './Hero.scss';
import heroImage from '../../../assets/hero3.svg'; //3
import instagram from '../../../assets/instagram.png';
import facebook from '../../../assets/facebook.png';
import twitter from '../../../assets/twitter.png';
const Hero = () => {
  return (
    <section className='hero container-fluid'>
      <div className='container'>
        <div className='row w-100 h-100'>
          <div className='col-12 col-md-6'>
            <div className='content'>
              <h5>No waits any more</h5>
              <h1>
                Fastest, <br /> Simplest <span>&</span> <br /> Hassel-Free
                Booking
              </h1>
            </div>
          </div>
          <div className='col-12 col-md-6 d-flex align-items-end'>
            {/* <img src={heroImage} alt='df' className='img-fluid' /> */}
            <div className='animation'>
              <lottie-player
                src='https://assets3.lottiefiles.com/packages/lf20_qX4zwY.json'
                background='transparent'
                speed='1'
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
        </div>
      </div>
      <div className='block'></div>
      <ul className='social-media'>
        <li>
          <a
            href='https://www.linkedin.com/in/ashutoshbisoyi/'
            target='_blank'
            rel='noreferrer'
          >
            <img src={twitter} alt='instagram' className='img-fluid' />
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/ashutoshbisoyi/'
            target='_blank'
            rel='noreferrer'
          >
            <img src={facebook} alt='instagram' className='img-fluid' />
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/ashutoshbisoyi/'
            target='_blank'
            rel='noreferrer'
          >
            <img src={instagram} alt='instagram' className='img-fluid' />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Hero;

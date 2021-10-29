import React from 'react';
import './RestaurantCard.scss';
import Slider from 'react-slick';
import { RegularButton } from '../button/Button';
import locationIcon from '../../assets/location.png';
import timingIcon from '../../assets/timing.png';
import { Link } from 'react-router-dom';
const RestaurantCard = ({ name, images, location, startTime, closeTime }) => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='restaurant-card'>
      <div className='top'>
        <Slider {...settings}>
          {images.map((image, index) => {
            return (
              <div className='img-slide' key={index}>
                <img src={image} alt='sdfsd' />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className='content'>
        <h4 className='name'>{name}</h4>
        <p className='location'>
          <img src={locationIcon} alt='location' className='img-fluid me-1' />
          {location}
        </p>
        <span className='timing'>
          <img src={timingIcon} alt='location' className='img-fluid me-1' />
          {`${startTime} - ${closeTime}`}
        </span>
        <div>
          <Link to={`/restaurants/${name}`}>
            <RegularButton variant='contained' color='primary'>
              See Menu
            </RegularButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;

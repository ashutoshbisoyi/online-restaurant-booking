import React from 'react';
import './RestaurantDetails.scss';
import Slider from 'react-slick';
import locationIcon from '../../../assets/colored-location.png';
import timingIcon from '../../../assets/timing.png';
import BreadCrumb from '../../../components/breadcrumb/BreadCrumb';
import { RegularButton } from '../../../components/button/Button';
const RestaurantDetails = ({ details }) => {
  const { name, location, images, startTime, closeTime, foodType } = details;
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className='container-fluid restaurant-details'>
      {name && (
        <div className='row gx-lg-5'>
          <div className='col-12 col-md-6 col-lg-5'>
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
          <div className='col-12 col-md-6 col-lg-7 pt-5 pt-md-0'>
            <BreadCrumb />
            <div className='content'>
              <h1>{name}</h1>
              <p className='location'>
                <img
                  src={locationIcon}
                  alt='location'
                  className='img-fluid me-1'
                />
                {location}
              </p>
              <span className='timing'>
                Timing :
                <img
                  src={timingIcon}
                  alt='location'
                  className='img-fluid ms-2 me-1'
                />
                {`${startTime} - ${closeTime}`}
              </span>
              <ul className='description'>
                <li>
                  {foodType === 'both'
                    ? 'Both Veg and Non-Veg'
                    : foodType === 'veg'
                    ? 'Only Veg'
                    : 'Only Non-Veg'}
                </li>
                <li>Available Now</li>
              </ul>
              <RegularButton variant='outlined' color='primary'>
                Checkout the Menu
              </RegularButton>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default RestaurantDetails;

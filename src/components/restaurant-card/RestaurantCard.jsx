import React from 'react';
import './RestaurantCard.scss';
import Slider from 'react-slick';
import { RegularButton } from '../button/Button';
import locationIcon from '../../assets/location.png';
import timingIcon from '../../assets/timing.png';
import { Link } from 'react-router-dom';
import { Chip } from '@mui/material';
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import TapasIcon from '@mui/icons-material/Tapas';
import available from '../../assets/right-mark.png';

const RestaurantCard = ({
  restaurantName,
  restaurantID,
  images,
  location,
  openTime,
  closeTime,
  veg,
  nonveg,
}) => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className='restaurant-card'>
      <div className='top'>
        <Slider {...settings}>
          {images.map((imageObj, index) => {
            return (
              <div className='img-slide' key={index}>
                <img src={imageObj.base64} alt='sdfsd' />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className='content'>
        <h4 className='name'>{restaurantName}</h4>
        <p className='location'>
          <img src={locationIcon} alt='location' className='img-fluid me-1' />
          {location}
        </p>
        <div>
          {veg && (
            <Chip
              size='small'
              label='Veg'
              style={{ backgroundColor: '#A6CF98', color: '#ffffff' }}
              className='me-1'
              icon={<RiceBowlIcon style={{ color: '#557C55' }} />}
            />
          )}
          {nonveg && (
            <Chip
              size='small'
              style={{ backgroundColor: '#FFB5B5', color: '#ffffff' }}
              label='Non Veg'
              icon={<TapasIcon style={{ color: '#FF7272' }} />}
            />
          )}
        </div>
        <div className='mt-3 d-flex justify-content-between align-items-center text-secondary'>
          <span className='available'>
            <img src={available} alt='available' className='img-fluid me-1' />{' '}
            Available
          </span>
          <span>
            <img src={timingIcon} alt='location' className='img-fluid me-2' />
            {`${openTime} - ${closeTime}`}
          </span>
        </div>
        <div>
          <Link to={`/restaurants/${restaurantID}`}>
            <RegularButton
              variant='contained'
              color='primary'
              className='hoverAction'
            >
              See Menu
            </RegularButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;

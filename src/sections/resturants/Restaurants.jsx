import React from 'react';
import './Restaurants.scss';
import forkIcon from '../../assets/fork.png';
import RestaurantsData from '../../data/RestaurantData';
import RestaurantCard from '../../components/restaurant-card/RestaurantCard';
const Restaurants = () => {
  return (
    <section className='container-fluid restaurants'>
      <div className='container'>
        <h2 className='title'>
          Restaurants
          <img src={forkIcon} alt='fork' className='img-fluid ms-3' />
        </h2>
        <div className='row'>
          {RestaurantsData.map((value, index) => (
            <div className='col-12 col-md-6 col-lg-3' key={index}>
              <RestaurantCard {...value} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Restaurants;
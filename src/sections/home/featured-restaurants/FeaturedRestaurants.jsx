import React, { useState } from 'react';
import './FeaturedRestaurants.scss';
import RestaurantCard from '../../../components/restaurant-card/RestaurantCard';
import forkIcon from '../../../assets/fork.png';
import { useEffect } from 'react';
import axios from 'axios';
import Loading from '../../../components/loading/Loading';
import Status from '../../../components/status/Status';
const FeaturedRestaurants = () => {
  const [loading, setLoading] = useState(false);
  const [restaurants, setRestaurants] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios
      .get('https://eatit-services.herokuapp.com/api/restaurant')
      .then((res) => {
        setLoading(false);
        setRestaurants(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <section className='container-fluid restaurants'>
      <div className='container'>
        <h2 className='title'>
          Featured Restaurants
          <img src={forkIcon} alt='fork' className='img-fluid ms-3' />
        </h2>
        <div className='row g-3'>
          {restaurants && !loading ? (
            restaurants.length > 0 ? (
              restaurants.slice(0, 4).map((value, index) => (
                <div className='col-12 col-md-6 col-lg-4 col-xl-3' key={index}>
                  <RestaurantCard {...value} />
                </div>
              ))
            ) : (
              <Status message='No Restaurants Found' />
            )
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRestaurants;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import RestaurantsData from '../data/RestaurantData';
import RestaurantDetails from '../sections/restaurant/restaurant-details/RestaurantDetails';
import RestaurantMenu from '../sections/restaurant/restaurant-menu/RestaurantMenu';

const Restaurant = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  let { restaurantName } = useParams();

  useEffect(() => {
    const thisRestaurantData = RestaurantsData.filter(
      (restaurant) => restaurant.name === restaurantName
    )[0];
    setRestaurantData(thisRestaurantData);
  }, [restaurantName]);
  return (
    <section>
      <div className='container'>
        <RestaurantDetails details={restaurantData} />
        <RestaurantMenu details={restaurantData} />
      </div>
    </section>
  );
};

export default Restaurant;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Loading from '../components/loading/Loading';
import RestaurantDetails from '../sections/restaurant/restaurant-details/RestaurantDetails';
import RestaurantMenu from '../sections/restaurant/restaurant-menu/RestaurantMenu';

const Restaurant = () => {
  const [restaurantData, setRestaurantData] = useState(null);
  let { restaurantId } = useParams();

  useEffect(() => {
    console.log(
      `https://eatit-services.herokuapp.com/api/restaurant/category/details/view/${restaurantId}`
    );
    axios
      .get(
        `https://eatit-services.herokuapp.com/api/restaurant/category/details/view/${restaurantId}`
      )
      .then((res) => {
        console.log(res.data);
        setRestaurantData(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, [restaurantId]);

  return (
    <section>
      {restaurantData ? (
        <div className='container'>
          <RestaurantDetails {...restaurantData} />
          <RestaurantMenu {...restaurantData} restaurantId={restaurantId} />
        </div>
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default Restaurant;

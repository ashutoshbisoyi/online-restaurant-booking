import React, { useState } from 'react';
import './RestaurantMenu.scss';
import MenuItem from '../../../components/menu-item/MenuItem';
import Slider from 'react-slick';
import plateIcon from '../../../assets/plate.png';
import Status from '../../../components/status/Status';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
const RestaurantMenu = ({
  category,
  restaurantName,
  restaurantId,
  restaurantMail,
  location,
}) => {
  const [menuType, setMenuType] = useState('all');
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const handleChange = (event, newAlignment) => {
    setMenuType(newAlignment);
  };
  return (
    <section className='restaurant-menu'>
      <div className='container'>
        <h2>
          Menu at {restaurantName}{' '}
          <img src={plateIcon} alt='menu items' className='img-fluid ms-2' />
        </h2>
        <div className='justify-center mb-5'>
          <ToggleButtonGroup
            color='primary'
            value={menuType}
            exclusive
            onChange={handleChange}
          >
            <ToggleButton value='veg'>Only Veg</ToggleButton>
            <ToggleButton value='all'>All Items</ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div className='card-container'>
          {category && category.length > 0 ? (
            <div>
              {category.map((value, index) => (
                <div className='menu-track ' key={index}>
                  <h4 className='mb-4'>{value.categoryName}</h4>
                  {value.items.length > 4 ? (
                    <Slider {...settings}>
                      {value.items.filter((item) =>
                        menuType === 'veg' ? item.veg === true : item.itemID
                      ).length > 0 ? (
                        value.items
                          .filter((item) =>
                            menuType === 'veg' ? item.veg === true : item.itemID
                          )
                          .map((item, index) => (
                            <div className='px-3 ps-0' key={index}>
                              <MenuItem
                                restaurantName={restaurantName}
                                restaurantId={restaurantId}
                                restaurantMail={restaurantMail}
                                restaurantLocation={location}
                                {...item}
                              />
                            </div>
                          ))
                      ) : (
                        <Status message='No menu found' />
                      )}
                    </Slider>
                  ) : (
                    <div className='row gy-5 gy-md-0'>
                      {value.items.filter((item) =>
                        menuType === 'veg' ? item.veg === true : item.itemID
                      ).length > 0 ? (
                        value.items
                          .filter((item) =>
                            menuType === 'veg' ? item.veg === true : item.itemID
                          )
                          .map((item, index) => {
                            console.log(item);
                            return (
                              <div
                                className='col-12 col-sm-6 col-md-4 col-lg-3'
                                key={index}
                              >
                                <MenuItem
                                  restaurantName={restaurantName}
                                  restaurantId={restaurantId}
                                  restaurantMail={restaurantMail}
                                  restaurantLocation={location}
                                  {...item}
                                />
                              </div>
                            );
                          })
                      ) : (
                        <Status message='No menu found' />
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div>
              <Status message='No menu found for this restaurant' />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RestaurantMenu;

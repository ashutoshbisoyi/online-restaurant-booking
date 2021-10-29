import React from 'react';
import './RestaurantMenu.scss';
import MenuItem from '../../../components/menu-item/MenuItem';
import Slider from 'react-slick';
import plateIcon from '../../../assets/plate.png';
const RestaurantMenu = ({ details }) => {
  const { menu, name } = details;
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
  return (
    <section className='container-fluid restaurant-menu'>
      <div className='container'>
        <h2>
          Menu at {name}{' '}
          <img src={plateIcon} alt='menu items' className='img-fluid ms-2' />
        </h2>
        <div className='card-container'>
          {menu &&
            menu.map(({ categoryName, items }, index) => (
              <div className='menu-track' key={index}>
                <h4>{categoryName}</h4>
                {items.length > 4 ? (
                  <Slider {...settings}>
                    {items.map((item, index) => (
                      <div className='px-3 ps-0' key={index}>
                        <MenuItem {...item} />
                      </div>
                    ))}
                  </Slider>
                ) : (
                  <div className='row gy-5 gy-md-0'>
                    {items.map((item, index) => (
                      <div
                        className='col-12 col-sm-6 col-md-4 col-lg-3'
                        key={index}
                      >
                        <MenuItem {...item} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantMenu;

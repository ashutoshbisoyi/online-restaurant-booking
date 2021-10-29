import React from 'react';
import './MenuItem.scss';
const MenuItem = ({ name, price, image, foodType, menuType }) => {
  return (
    <div className='menu-item'>
      <div
        className='image'
        style={{ backgroundImage: `url('${image}')` }}
      ></div>
      <div className='title-price'>
        <h5>{name}</h5>
        <span>{price}</span>
      </div>
      <p>{foodType}</p>
      <p>{menuType}</p>
    </div>
  );
};

export default MenuItem;

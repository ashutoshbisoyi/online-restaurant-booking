import React from 'react';
import { SmallButton } from '../button/Button';
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
        <span>₹{price}</span>
      </div>
      <ul>
        <li className={foodType}>{foodType}</li>
        <li>{menuType}</li>
      </ul>
      <div>
        <SmallButton variant='contained' size='small' fullWidth>
          Add to plate
        </SmallButton>
      </div>
    </div>
  );
};

export default MenuItem;

import React from 'react';
import { useDispatch } from 'react-redux';
import { SmallButton } from '../button/Button';
import { addItemToPlate } from '../../features/plateSlice';
import './MenuItem.scss';

const MenuItem = ({ name, price, image, foodType, menuType, id }) => {
  const dispatch = useDispatch();
  const handleAddToPlate = (id) => {
    dispatch(
      addItemToPlate({
        id: id,
        name: name,
        price: price,
        image: image,
        foodType: foodType,
        menuType: menuType,
        quantity: 1,
      })
    );
  };
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
        <SmallButton
          variant='contained'
          size='small'
          fullWidth
          onClick={() => handleAddToPlate(id)}
        >
          Add to plate
        </SmallButton>
      </div>
    </div>
  );
};

export default MenuItem;

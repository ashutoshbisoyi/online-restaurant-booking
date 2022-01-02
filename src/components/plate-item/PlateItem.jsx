import React from 'react';
import './PlateItem.scss';
import plusIcon from '../../assets/plus.svg';
import minusIcon from '../../assets/minus.svg';
import deleteIcon from '../../assets/delete.svg';
import { useDispatch } from 'react-redux';
import {
  increaseQuantity,
  decreaseQuantity,
  removeItemFromPlate,
} from '../../features/plateSlice';

const PlateItem = ({
  name,
  images,
  price,
  veg,
  quantity,
  menuType,
  id,
  showMessage,
}) => {
  const dispatch = useDispatch();
  const handleQuantityIncrement = (id) => {
    dispatch(increaseQuantity(id));
  };
  const handleQuantityDecrement = (id) => {
    dispatch(decreaseQuantity(id));
  };
  const handleRemoveItem = (id) => {
    showMessage(name);
    dispatch(removeItemFromPlate(id));
  };

  return (
    <>
      <div className='plate-item'>
        <div className='row'>
          <div className='col-3 col-md-1 justify-center mb-4 mb-md-0'>
            <div
              className='image'
              style={{
                backgroundImage: `url('${
                  images && images.length > 0 && images[0].base64
                }')`,
              }}
            ></div>
          </div>
          <div className='col-9 col-md-4 col-lg-3 d-flex justify-content-md-center align-items-center mb-4 mb-md-0'>
            <h5>{name}</h5>
          </div>
          <div className='col-lg-2 justify-center d-none d-lg-flex'>
            <span>{veg ? 'veg' : 'nonveg'}</span>
          </div>
          <div className='col-lg-1 justify-center d-none d-lg-flex'>
            <span>{price}</span>
          </div>
          <div className='col-6 col-md-3 col-lg-2 d-flex justify-content-md-center align-items-center'>
            <div>
              <img
                src={minusIcon}
                alt='minus'
                className='img-fluid actionIcon'
                onClick={() => handleQuantityDecrement(id)}
              />
              <span className='mx-3'>{quantity}</span>
              <img
                src={plusIcon}
                alt='plus'
                className='img-fluid actionIcon'
                onClick={() => handleQuantityIncrement(id)}
              />
            </div>
          </div>

          <div className='col-6 col-md-2 d-flex justify-content-end justify-content-md-center align-items-center'>
            <span className='total-price'>₹ {quantity * price}</span>
          </div>
          <div className='col-12 col-md-2 col-lg-1 justify-center'>
            <img
              src={deleteIcon}
              alt='delete'
              onClick={() => handleRemoveItem(id)}
              className='img-fluid delete'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PlateItem;

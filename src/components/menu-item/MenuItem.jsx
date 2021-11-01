import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SmallButton } from '../button/Button';
import { addItemToPlate } from '../../features/plateSlice';
import './MenuItem.scss';
import { Alert, Snackbar } from '@mui/material';
import Slide from '@mui/material/Slide';

function SlideTransition(props) {
  return <Slide {...props} direction='up' />;
}

const MenuItem = ({ name, price, image, foodType, menuType, id }) => {
  const [modal, setModal] = useState({
    visibility: false,
    itemName: '',
  });
  const dispatch = useDispatch();
  const handleAddToPlate = (id) => {
    setModal({
      visibility: true,
      itemName: name,
    });
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
  const handleClose = () => {
    setModal({
      ...modal,
      visibility: false,
    });
  };
  return (
    <>
      <Snackbar
        open={modal.visibility}
        autoHideDuration={6000}
        onClose={handleClose}
        TransitionComponent={SlideTransition}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
          {modal.itemName} added to you plate
        </Alert>
      </Snackbar>
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
    </>
  );
};

export default MenuItem;

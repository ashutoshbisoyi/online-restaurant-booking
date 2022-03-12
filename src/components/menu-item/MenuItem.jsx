import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SmallButton } from '../button/Button';
import { addItemToPlate, selectPlateItems } from '../../features/plateSlice';
import './MenuItem.scss';
import { Alert, Snackbar } from '@mui/material';
import Slide from '@mui/material/Slide';
import defaultMenuImage from '../../assets/menu-items/chicken-biriyani.webp';

function SlideTransition(props) {
  return <Slide {...props} direction='up' />;
}

const MenuItem = ({
  itemName,
  itemPrice,
  images = defaultMenuImage,
  veg,
  nonveg,
  itemID,
  restaurantId,
  restaurantName,
  restaurantMail,
}) => {
  const [modal, setModal] = useState({
    visibility: false,
    itemName: '',
  });
  const dispatch = useDispatch();
  const itemsInPlate = useSelector(selectPlateItems);

  const handleAddToPlate = (id) => {
    const result = itemsInPlate.filter(
      (value) => value.restaurantId === restaurantId
    );
    console.log(result);
    console.log(itemsInPlate === []);
    if (itemsInPlate.length === 0 || result.length !== 0) {
      console.log(restaurantName);
      setModal({
        visibility: true,
        itemName: itemName,
      });
      dispatch(
        addItemToPlate({
          itemID: id,
          itemName: itemName,
          itemPrice: itemPrice,
          images: images,
          veg: veg,
          nonveg: nonveg,
          quantity: 1,
          restaurantId: restaurantId,
          restaurantName: restaurantName,
          restaurantMail: restaurantMail,
        })
      );
    } else {
      alert(
        'You have an existing item in your plate from another restaurant. To proceed, remove that first'
      );
    }
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
          style={{
            backgroundImage: `url('${
              images.length > 0 ? images[0].base64 : defaultMenuImage
            }')`,
          }}
        ></div>
        <div className='title-price'>
          <h5>{itemName}</h5>
          <span>₹{itemPrice}</span>
        </div>
        <ul>
          <li className={veg ? 'veg' : 'nonveg'}>{veg ? 'Veg' : 'Non Veg'}</li>
        </ul>
        <div>
          {itemsInPlate.filter((value) => value.itemID === itemID).length ===
          0 ? (
            <SmallButton
              variant='contained'
              size='small'
              fullWidth
              onClick={() => handleAddToPlate(itemID)}
            >
              Add to plate
            </SmallButton>
          ) : (
            <SmallButton variant='contained' size='small' disabled fullWidth>
              In Plate
            </SmallButton>
          )}
        </div>
      </div>
    </>
  );
};

export default MenuItem;

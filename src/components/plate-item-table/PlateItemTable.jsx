import React, { useEffect, useState } from 'react';
import './PlateItemTable.scss';
import { useSelector } from 'react-redux';
import { selectPlateItems } from '../../features/plateSlice';
import PlateItem from '../plate-item/PlateItem';
import { Alert, Snackbar } from '@mui/material';
import Slide from '@mui/material/Slide';
import { RegularButton } from '../button/Button';
import axios from 'axios';
import Checkout from '../modal/Checkout';

function SlideTransition(props) {
  return <Slide {...props} direction='up' />;
}

const PlateItemTable = () => {
  const [subTotal, setSubTotal] = useState(0);
  const [checkout, setCheckout] = useState(false);
  const [modal, setModal] = useState({
    visibility: false,
    itemName: '',
  });
  const itemsInPlate = useSelector(selectPlateItems);
  useEffect(() => {
    setSubTotal(
      itemsInPlate.reduce(
        (accumulator, current) =>
          accumulator + current.price * current.quantity,
        0
      )
    );
  }, [itemsInPlate]);

  const showMessage = (name) => {
    setModal({
      visibility: true,
      itemName: name,
    });
  };
  const handleClose = () => {
    setModal({
      ...modal,
      visibility: false,
    });
  };

  const gst = (subTotal * 5) / 100;
  const platformFee = 29;

  const handleCloseCheckout = () => setCheckout(false);

  return (
    <>
      <Snackbar
        open={modal.visibility}
        autoHideDuration={6000}
        onClose={handleClose}
        TransitionComponent={SlideTransition}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={handleClose} severity='error' sx={{ width: '100%' }}>
          {modal.itemName} removed from your plate
        </Alert>
      </Snackbar>
      {checkout && (
        <Checkout
          open={checkout}
          handleClose={handleCloseCheckout}
          subTotal={subTotal}
        />
      )}
      <div className='plate-item-table'>
        <div className='row table-head d-none d-lg-flex'>
          <div className='col-1 justify-center'></div>
          <div className='col-3 justify-center'>
            <h5>Item Name</h5>
          </div>
          <div className='col-2 justify-center'>
            <h5>Type</h5>
          </div>
          <div className='col-1 justify-center'>
            <h5>Price/Plate</h5>
          </div>
          <div className='col-2 justify-center'>
            <h5>Quantity</h5>
          </div>

          <div className='col-2 justify-center'>
            <h5>Total</h5>
          </div>
        </div>
        <div className='item-container'>
          {itemsInPlate &&
            itemsInPlate.map((item, index) => (
              <PlateItem {...item} key={index} showMessage={showMessage} />
            ))}
        </div>
        <div className='sub-total'>
          <div>
            <p>
              Plate Price <span className='price'>₹ {subTotal}</span>
            </p>
            <p>
              GST <span className='price'>₹ {gst}</span>
            </p>
            <p>
              Platform Fees <span className='price'>₹ {platformFee}</span>
            </p>
            <h4>
              Sub Total <span className='price'>₹ {subTotal}</span>
            </h4>
            <hr className='my-4' />
            <RegularButton
              variant='contained'
              onClick={() => setCheckout(true)}
            >
              Proceed
            </RegularButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlateItemTable;

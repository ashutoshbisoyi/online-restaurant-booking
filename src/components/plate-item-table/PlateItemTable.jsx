import React, { useEffect, useState } from 'react';
import './PlateItemTable.scss';
import { useSelector } from 'react-redux';
import { selectPlateItems } from '../../features/plateSlice';
import PlateItem from '../plate-item/PlateItem';
import { Alert, Snackbar } from '@mui/material';
import Slide from '@mui/material/Slide';

function SlideTransition(props) {
  return <Slide {...props} direction='up' />;
}

const PlateItemTable = () => {
  const [subTotal, setSubTotal] = useState(0);
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
            <h4>
              Sub Total <div className='price'>₹{subTotal}</div>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlateItemTable;

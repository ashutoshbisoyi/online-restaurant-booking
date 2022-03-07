import React, { useEffect, useState } from 'react';
import './PlateItemTable.scss';
import { useSelector } from 'react-redux';
import { selectPlateItems } from '../../features/plateSlice';
import PlateItem from '../plate-item/PlateItem';
import { Alert, Snackbar } from '@mui/material';
import Slide from '@mui/material/Slide';
import { RegularButton } from '../button/Button';
import Checkout from '../modal/check-out/Checkout';
import OrderSummary from '../modal/order-summary/OrderSummary';
import { Link, useHistory, useParams } from 'react-router-dom';

function SlideTransition(props) {
  return <Slide {...props} direction='up' />;
}

const PlateItemTable = () => {
  const [modals, setModals] = useState({
    checkout: false,
    orderSummary: false,
  });
  const [subTotal, setSubTotal] = useState(0);
  const [modal, setModal] = useState({
    visibility: false,
    itemName: '',
  });

  const { modalName } = useParams();

  useEffect(() => {
    console.log(modalName);
    if (modalName === 'checkout') {
      setModals({ checkout: true, orderSummary: false });
    } else if (modalName === 'orderSummary') {
      setModals({ checkout: false, orderSummary: true });
    } else {
      setModals({ checkout: false, orderSummary: false });
    }
    console.log(modals);
  }, [modalName]);

  const itemsInPlate = useSelector(selectPlateItems);
  const history = useHistory();

  useEffect(() => {
    setSubTotal(
      itemsInPlate.reduce(
        (accumulator, current) =>
          accumulator + current.itemPrice * current.quantity,
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

  const handleCloseModal = () => history.push('/plate');

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
      {modals.checkout && (
        <Checkout
          open={modals.checkout}
          handleClose={handleCloseModal}
          subTotal={subTotal}
          itemsInPlate={itemsInPlate}
        />
      )}
      {modals.orderSummary && (
        <OrderSummary
          open={modals.orderSummary}
          handleClose={handleCloseModal}
          subTotal={subTotal}
          itemsInPlate={itemsInPlate}
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
            <Link to='plate/checkout'>
              <RegularButton
                variant='contained'
                // onClick={() => setCheckout(true)}
              >
                Proceed
              </RegularButton>
            </Link>
            <h1>{modals.checkout}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlateItemTable;

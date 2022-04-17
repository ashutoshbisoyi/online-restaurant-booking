import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { SmallButton } from '../../button/Button';

const OrderSummary = ({ open, handleClose, subTotal, itemsInPlate }) => {
  const [loading, setLoading] = useState({ status: false, message: null });

  const initiatePayment = () => {
    setLoading({ status: true, message: 'Confirming Order ' });

    const uniqueID = `EATIT${Date.now()}`;

    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    const orderDetails = {
      orderID: uniqueID,
      restaurantID: itemsInPlate[0].restaurantId,
      restaurantName: itemsInPlate[0].restaurantName,
      restaurantMail: itemsInPlate[0].restaurantMail,
      restaurantLocation: itemsInPlate[0].restaurantLocation,
      orderItem: itemsInPlate,
      totalPrice: subTotal,
      buyerName: userDetails.name,
      buyerMobile: userDetails.mobile,
      buyerEmail: userDetails.email,
    };

    console.log(
      'https://eatit-services.herokuapp.com/api/restaurant/cart/add',
      orderDetails
    );

    axios
      .post(
        'https://eatit-services.herokuapp.com/api/restaurant/cart/add',
        orderDetails
      )
      .then((res) => {
        console.log(res);

        setLoading({ status: true, message: 'Initiating Payment' });

        const paymentDetails = {
          name: userDetails.name,
          email: userDetails.email,
          amount: subTotal,
          mobile: userDetails.mobile,
          orderID: uniqueID,
        };

        console.log(
          'https://eatit-services.herokuapp.com/api/eatit/payment/initiate',
          paymentDetails
        );
        axios
          .post(
            'https://eatit-services.herokuapp.com/api/eatit/payment/initiate',
            paymentDetails
          )
          .then((res) => {
            setLoading({ status: false, message: null });
            console.log(res);
            console.log('in then block');
            window.location.href = res.data;
          })
          .catch((err) => {
            console.log(err);
            setLoading({ status: false, message: null });
          });
      })
      .catch((err) => {
        console.log(err);
        setLoading({ status: false, message: null });
      });
  };

  const randomOrderId = Math.floor(1000 + Math.random() * 9000);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Order Summary</DialogTitle>
      <DialogContent>
        <DialogContentText>
          You have {itemsInPlate.length} items in your plate from{' '}
          {itemsInPlate[0].restaurantName}. Your order ID is{' '}
          <strong>#EATIT{randomOrderId}</strong>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <SmallButton variant='contained' onClick={initiatePayment}>
          {loading.status ? (
            <div>
              {loading.message} <CircularProgress color='inherit' size={20} />
            </div>
          ) : (
            'Proceed for Payment'
          )}
        </SmallButton>
      </DialogActions>
    </Dialog>
  );
};

export default OrderSummary;

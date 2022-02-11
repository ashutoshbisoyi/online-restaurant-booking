import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
} from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { SmallButton } from '../button/Button';

const Checkout = ({ open, handleClose, subTotal }) => {
  const [details, setDetails] = useState({
    name: '',
    email: '',
    number: '',
    orderValue: subTotal,
  });

  const initiatePayment = () => {
    console.log(
      'inside function calling https://eatit-services.herokuapp.com/api/eatit/payment/initiate with data',
      details
    );

    axios
      .post(
        'https://eatit-services.herokuapp.com/api/eatit/payment/initiate',
        details
      )
      .then((res) => {
        console.log(res);
        console.log('in then block');
        window.location.href = res.data;
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (name, e) => {
    setDetails({ ...details, [name]: e.target.value });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Checkout</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Thank you for making an order from eatit. Please enter your details
          and proceed for payment.
        </DialogContentText>
        <Grid container spacing={2} className='mt-3'>
          <Grid item md={6} xs={12}>
            <TextField
              autoFocus
              id='name'
              label='Name'
              type='text'
              fullWidth
              variant='standard'
              value={details.name}
              onChange={(e) => handleChange('name', e)}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              id='email'
              label='Email Address'
              type='email'
              fullWidth
              variant='standard'
              value={details.email}
              onChange={(e) => handleChange('email', e)}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              id='number'
              label='Mobile Number'
              type='number'
              fullWidth
              variant='standard'
              value={details.number}
              onChange={(e) => handleChange('number', e)}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            {' '}
            <TextField
              id='outlined-read-only-input'
              label='Order Value'
              defaultValue={details.orderValue}
              InputProps={{
                readOnly: true,
              }}
              variant='standard'
              fullWidth
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <SmallButton variant='contained' onClick={initiatePayment}>
          Proceed for Payment
        </SmallButton>
      </DialogActions>
    </Dialog>
  );
};

export default Checkout;

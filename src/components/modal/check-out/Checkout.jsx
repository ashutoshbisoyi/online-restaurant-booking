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
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SmallButton } from '../../button/Button';

const Checkout = ({ open, handleClose, subTotal, itemsInPlate }) => {
  const [details, setDetails] = useState({
    name: '',
    email: '',
    mobile: '',
    amount: subTotal.toString(),
  });

  // console.log(itemsInPlate);

  const history = useHistory();

  const proceed = () => {
    if (details.name === '' || details.email === '' || details.mobile === '') {
      alert('Please enter all the details');
    } else {
      if (details.mobile.length > 10) {
        alert('Mobile number should be of 10 digits');
      } else {
        localStorage.setItem('userDetails', JSON.stringify(details));
        history.push('/plate/orderSummary');
      }
    }
  };

  const handleChange = (name, e) => {
    if (name === 'mobile') {
      details.mobile.length < 10 &&
        setDetails({ ...details, [name]: e.target.value });
    } else {
      setDetails({ ...details, [name]: e.target.value });
    }
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
              value={details.mobile}
              onChange={(e) => handleChange('mobile', e)}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            {' '}
            <TextField
              id='outlined-read-only-input'
              label='Order Value'
              defaultValue={details.amount}
              type='text'
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
        <SmallButton variant='contained' onClick={proceed}>
          Proceed
        </SmallButton>
      </DialogActions>
    </Dialog>
  );
};

export default Checkout;

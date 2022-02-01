import React from 'react';
import { Link } from 'react-router-dom';
import animation from '../assets/payment-failed.gif';
import { RegularButton } from '../components/button/Button';

const PaymentFailed = () => {
  return (
    <div className='container-fluid pb-5' style={{ minHeight: '100vh' }}>
      <div className='text-center container'>
        <img src={animation} alt='success' className='img-fluid' />
        <h1 className='mb-3' style={{ color: '#F3533B' }}>
          Payment Failed
        </h1>
        <p className='mb-3 text-secondary'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          consequatur cumque illo dolore ratione? Laborum neque inventore, fugit
          nisi consequatur excepturi quasi doloremque nemo obcaecati pariatur
          vitae quia cupiditate iste.
        </p>

        <Link to='/'>
          <RegularButton variant='contained'>Go Back</RegularButton>
        </Link>
      </div>
    </div>
  );
};

export default PaymentFailed;

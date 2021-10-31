import React from 'react';
import { Link } from 'react-router-dom';
import { SmallButton } from '../button/Button';
import './ErrorMessage';

const ErrorMessage = ({ image, alt, message, actionName, actionLink }) => {
  return (
    <div className='text-center py-5'>
      <img
        src={image}
        alt={alt}
        className='img-fluid'
        style={{ maxWidth: '300px' }}
      />
      <p className='text-secondary fs-5'>{message}</p>
      {actionLink && (
        <Link to={actionLink}>
          <SmallButton variant='contained' color='primary'>
            {actionName}
          </SmallButton>
        </Link>
      )}
    </div>
  );
};

export default ErrorMessage;

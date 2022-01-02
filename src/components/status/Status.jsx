import React from 'react';
import './Status.scss';
import noDataIllustration from '../../assets/no-data.svg';
import { SmallButton } from '../../components/button/Button';
import { Link } from 'react-router-dom';

const Status = ({
  image = noDataIllustration,
  message = 'No Data',
  actionName,
  actionLink,
}) => {
  return (
    <div className='status'>
      <img src={image} alt='no data' className='img-fluid' />
      <p>{message}</p>
      {actionName && actionLink && (
        <Link to={actionLink}>
          <SmallButton>{actionName}</SmallButton>
        </Link>
      )}
    </div>
  );
};

export default Status;

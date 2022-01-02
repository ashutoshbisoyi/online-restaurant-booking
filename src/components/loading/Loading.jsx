import { CircularProgress } from '@mui/material';
import React from 'react';

const Loading = () => {
  return (
    <div className='py-5 justify-center'>
      <CircularProgress />
    </div>
  );
};

export default Loading;

import React from 'react';
import './PlateItemTable.scss';
import { useSelector } from 'react-redux';
import { selectPlateItems } from '../../features/plateSlice';
import PlateItem from '../plate-item/PlateItem';

const PlateItemTable = () => {
  const itemsInPlate = useSelector(selectPlateItems);
  return (
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
            <PlateItem {...item} key={index} />
          ))}
      </div>
    </div>
  );
};

export default PlateItemTable;

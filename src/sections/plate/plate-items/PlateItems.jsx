import React from 'react';
import { useSelector } from 'react-redux';
import ErrorMessage from '../../../components/error-message/ErrorMessage';
import { selectPlateItems } from '../../../features/plateSlice';
import './PlateItems.scss';
import hungryImg from '../../../assets/hungry.jpg';
import PlateItemTable from '../../../components/plate-item-table/PlateItemTable';

const PlateItems = () => {
  const itemsInPlate = useSelector(selectPlateItems);
  console.log(itemsInPlate);
  const restaurantName = itemsInPlate[0] && itemsInPlate[0].restaurantName;
  return (
    <>
      <section className='container-fluid plate-items'>
        <div className='container'>
          {itemsInPlate.length > 0 ? (
            <div>
              <h2 className='title'>
                You have <span>{itemsInPlate.length}</span> items from{' '}
                {restaurantName} in your plate
              </h2>
              <div className='table-container'>
                <PlateItemTable />
              </div>
            </div>
          ) : (
            <ErrorMessage
              image={hungryImg}
              alt='hungry man'
              message='Oops! No items in your plate'
              actionName='Start searching restaurants'
              actionLink='/restaurants'
            />
          )}
        </div>
      </section>
    </>
  );
};

export default PlateItems;

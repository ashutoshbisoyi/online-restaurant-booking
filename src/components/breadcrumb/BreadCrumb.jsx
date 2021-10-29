import React from 'react';
import Breadcrumbs from 'react-router-dynamic-breadcrumbs';
const BreadCrumb = () => {
  const routesList = {
    '/': 'Home',
    '/restaurants/:restaurantName': ':restaurantName',
  };
  return (
    <Breadcrumbs
      mappedRoutes={routesList}
      WrapperComponent={(props) => (
        <ol className='breadcrumb'>{props.children}</ol>
      )}
      ActiveLinkComponent={(props) => (
        <li className='breadcrumb-item active'>{props.children}</li>
      )}
      LinkComponent={(props) => (
        <li className='breadcrumb-item'>{props.children}</li>
      )}
    />
  );
};

export default BreadCrumb;

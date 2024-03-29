import React from 'react';
import './NavigationBar.scss';
import { Link, NavLink } from 'react-router-dom';
import hamburgerIcon from '../../assets/hamburger.png';
import plateIcon from '../../assets/food-plate.png';
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectPlateItems } from '../../features/plateSlice';
import logo from '../../assets/logo.png';

const NavigationBar = () => {
  const itemsInPlate = useSelector(selectPlateItems);
  return (
    <nav className='navbar sticky-top navbar-expand-lg navbar-light bg-white'>
      <div className='container'>
        <Link to='/'>
          <h1 className='logo'>
            <img src={logo} alt='eat-it' className='img-fluid' />
          </h1>
        </Link>
        <div className='d-lg-none'>
          <NavLink exact to='/plate'>
            <Badge badgeContent={itemsInPlate.length} color='secondary'>
              <img
                src={plateIcon}
                alt='plate'
                className='img-fluid plate-icon'
              />
            </Badge>
          </NavLink>
        </div>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <img src={hamburgerIcon} alt='hamburger icon' className='img-fluid' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav mx-auto'>
            <li className='nav-item'>
              <NavLink
                exact
                to='/'
                className='nav-link'
                activeClassName='nav-active'
              >
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                exact
                to='/restaurants'
                className='nav-link'
                activeClassName='nav-active'
              >
                Restaurants
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                exact
                to='/about'
                className='nav-link'
                activeClassName='nav-active'
              >
                About Us
              </NavLink>
            </li>
          </ul>
          <div className='d-flex justify-content-center align-items-center'>
            <div className='plate-container d-none d-lg-block me-5'>
              <NavLink exact to='/plate'>
                <Badge badgeContent={itemsInPlate.length} color='secondary'>
                  <img
                    src={plateIcon}
                    alt='plate'
                    className='img-fluid plate-icon'
                  />
                </Badge>
              </NavLink>
            </div>
            {/* <div className='d-flex justify-content-center'>
              <RegularButton variant='contained' color='primary'>
                Contact Us
              </RegularButton>
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;

import React from 'react';
import './NavigationBar.scss';
import { Link } from 'react-router-dom';
import { RegularButton } from '../button/Button';
import hamburgerIcon from '../../assets/hamburger.png';
const NavigationBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-transparent'>
      <div className='container'>
        <div className='logo'>
          <h1>
            Good <span>Food</span>
          </h1>
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
              <Link to='/hotels' className='nav-link'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/guide' className='nav-link'>
                How To
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link'>
                About Us
              </Link>
            </li>
          </ul>
          <div className='d-flex justify-content-center'>
            <RegularButton variant='contained' color='primary'>
              Contact Us
            </RegularButton>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;

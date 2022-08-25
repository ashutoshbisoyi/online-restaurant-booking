import * as React from 'react';
import './MuiBar.scss';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import logo from '../../assets/logo.png';
import plateIcon from '../../assets/food-plate.png';
import { useSelector } from 'react-redux';
import { selectPlateItems } from '../../features/plateSlice';
import { RegularButton } from '../button/Button';
import { Link, NavLink } from 'react-router-dom';
import SearchBar from '../search-bar/SearchBar';

export default function MuiBar() {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const itemsInPlate = useSelector(selectPlateItems);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      className='mobile-menu'
    >
      <NavLink exact to='/' className='nav-link' activeClassName='nav-active'>
        <MenuItem>Home</MenuItem>
      </NavLink>
      <NavLink
        exact
        to='/restaurant'
        className='nav-link'
        activeClassName='nav-active'
      >
        <MenuItem>Restaurants</MenuItem>
      </NavLink>
      <NavLink
        exact
        to='/about'
        className='nav-link'
        activeClassName='nav-active'
      >
        <MenuItem>About Us</MenuItem>
      </NavLink>
    </Menu>
  );

  return (
    <Box
      sx={{ flexGrow: 1 }}
      style={{ position: 'sticky', top: 0, zIndex: 99 }}
    >
      <AppBar
        position='sticky'
        sx={{
          background: '#ffffff',
          padding: '0.5em 0',
          position: '-webkit-sticky',
          top: 0,
        }}
      >
        <Toolbar>
          <div edge='start' className='me-0 me-md-3 me-lg-5'>
            <Link to='/'>
              <img src={logo} alt='eat-it' className='img-fluid logo' />
            </Link>
          </div>
          <SearchBar />
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{ display: { xs: 'none', md: 'flex', alignItems: 'center' } }}
          >
            <ul className='nav-ul'>
              <li>
                <NavLink
                  exact
                  to='/'
                  className='nav-link'
                  activeClassName='nav-active'
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to='/restaurants'
                  className='nav-link'
                  activeClassName='nav-active'
                >
                  Restaurants
                </NavLink>
              </li>
              <li>
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
            <div className='mx-5'>
              <Link to='/plate'>
                <Badge badgeContent={itemsInPlate.length} color='secondary'>
                  <img
                    src={plateIcon}
                    alt='plate'
                    className='img-fluid plate-icon'
                  />
                </Badge>
              </Link>
            </div>
            <RegularButton variant='contained' color='primary'>
              Contact Us
            </RegularButton>
          </Box>
          <Box
            sx={{ display: { xs: 'flex', md: 'none', alignItems: 'center' } }}
          >
            <div className='mx-2'>
              <Link to='/plate'>
                <Badge badgeContent={itemsInPlate.length} color='secondary'>
                  <img
                    src={plateIcon}
                    alt='plate'
                    className='img-fluid plate-icon'
                  />
                </Badge>
              </Link>
            </div>
            <IconButton
              size='small'
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'
            >
              <MoreIcon sx={{ color: '#000000' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}

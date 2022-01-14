import * as React from 'react';
import './SearchBar.scss';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect } from 'react';
import axios from 'axios';
import { useAutocomplete } from '@mui/base/AutocompleteUnstyled';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: 'red',
//   '&:hover': {
//     backgroundColor: '#eeeeee',
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: '180px',
//   border: 'none',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(3),
//     width: 'auto',
//   },
// }));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const SearchBar = () => {
  const [restaurants, setRestaurants] = React.useState([]);
  useEffect(() => {
    axios
      .get('https://eatit-services.herokuapp.com/api/restaurant')
      .then((res) => {
        setRestaurants(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: 'use-autocomplete-demo',
    options: restaurants,
    getOptionLabel: (option) => option.restaurantName,
  });
  return (
    <div className='search-bar'>
      <div className='search' {...getRootProps()}>
        <SearchIconWrapper>
          <SearchIcon sx={{ color: '#999999' }} />
        </SearchIconWrapper>
        <input placeholder='Search Restaurants' {...getInputProps()} />
      </div>
      {groupedOptions.length > 0 ? (
        <ul className='result-container' {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <Link to={`/restaurants/${option.restaurantID}`} key={index}>
              <li {...getOptionProps({ option, index })}>
                {option.restaurantName}
              </li>
            </Link>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default SearchBar;

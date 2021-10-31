import React from 'react';
//styles
import './styles/main.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//theme
import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/theme';
//router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//components
import NavigationBar from './components/navigation-bar/NavigationBar';
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';
import Plate from './pages/Plate';
import Restaurants from './sections/resturants/Restaurants';
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/restaurants' component={Restaurants} />
          <Route
            exact
            path='/restaurants/:restaurantName'
            component={Restaurant}
          />
          <Route exact path='/plate' component={Plate} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;

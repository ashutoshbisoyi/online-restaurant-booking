import React, { useEffect } from 'react';
//styles
import './styles/main.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//theme
import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/theme';
//router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//aos
import Aos from 'aos';
import 'aos/dist/aos.css';
//components
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';
import Plate from './pages/Plate';
import Restaurants from './sections/resturants/Restaurants';
import MuiBar from './components/mui-bar/MuiBar';
import PaymentSuccess from './pages/PaymentSuccess';
import PaymentFailed from './pages/PaymentFailed';

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 0,
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MuiBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/restaurants' component={Restaurants} />
          <Route
            exact
            path='/restaurants/:restaurantId'
            component={Restaurant}
          />
          <Route path='/plate/:modalName' component={Plate} />
          <Route path='/plate' component={Plate} />
          <Route exact path='/payment-success' component={PaymentSuccess} />
          <Route exact path='/payment-failed' component={PaymentFailed} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;

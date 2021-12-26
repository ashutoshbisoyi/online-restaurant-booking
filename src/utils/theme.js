import { createTheme } from '@mui/material';
import '../styles/_variables.scss';
const theme = createTheme({
  palette: {
    primary: {
      main: '#f7951e',
      dark: '#da8114',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ececec',
    },
  },
});

export default theme;

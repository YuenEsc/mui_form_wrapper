import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MuiThemeProvider } from "@material-ui/core";
import { createTheme } from '@material-ui/core/styles';

const haulerHeroTheme = createTheme({
  typography: {
    fontFamily: `"Inter", sans-serif`,
  },
  palette: {
    main: '#0073E6',
    primaryText: '#042040',
    secondaryText: '#7a869a',
    grey: {
      200: '#E5E7EB',
    },
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={haulerHeroTheme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
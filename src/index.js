import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MuiThemeProvider } from "@material-ui/core";
import haulerHeroTheme from "./theme";

ReactDOM.render(
  <MuiThemeProvider theme={haulerHeroTheme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
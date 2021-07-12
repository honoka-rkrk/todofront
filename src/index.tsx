import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './Store/store';
import { Provider } from 'react-redux';
import { NavyTheme } from './Style/theme';
import { MuiThemeProvider } from '@material-ui/core/styles';

ReactDOM.render(
  <MuiThemeProvider theme={NavyTheme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

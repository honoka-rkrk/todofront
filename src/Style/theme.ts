import { colors } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

export const DarkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#90caf9'
    },
    secondary: {
      main: '#f48fb1'
    }
  }
});

export const NavyTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#e91e63'
    },
    secondary: {
      main: '#1976D2'
    },
    background: {
      default: '#000b1c',
      paper: '#001a42'
    }
  }
});

export const DefaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: colors.blue[800]
    }
  }
});

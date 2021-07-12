import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { title = '' } = props;
  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' data-testid='header'>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;

import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Header from '../Container/Header/header';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '80px'
    }
  })
);

const Main: React.FC = () => {
  const styles = useStyle();
  return (
    <Box className={styles.root}>
      <Header />
    </Box>
  );
};

export default Main;

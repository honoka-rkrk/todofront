import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core';

import Base from '../../Base/Component/main-base';
import Detail from '../Container/Detail/detail';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'grid',
      gridTemplateRows: '35% 3% 59% 3%',
      gridTemplateColumns: '20% 3% 77%',
      paddingTop: '0.5%',
      paddingLeft: '0.5%',
      paddingRight: '0.5%'
    }
  })
);

const Main: React.FC = () => {
  const styles = useStyle();

  return (
    <Base className={styles.root}>
      <Detail />
    </Base>
  );
};

export default Main;

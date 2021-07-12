import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Base from '../../Base/Component/main-base';
import AllProject from '../Container/AllProject/allProject';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
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
      <AllProject />
    </Base>
  );
};

export default Main;

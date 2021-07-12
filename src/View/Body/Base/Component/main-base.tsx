import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';

const useStyle = makeStyles({
  base: {
    height: 'calc(100vh - 80px)'
  }
});

interface BaseProps {
  children?: React.ReactNode;
  className?: string;
}

const MainBase: React.FC<BaseProps> = (props: BaseProps) => {
  const styles = useStyle();
  return <Box className={`${styles.base} ${props.className}`}>{props.children}</Box>;
};

export default MainBase;

import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

import EditDialog from '../../../Container/Detail/Deadline/editDialog';
import { Color } from '../../../Container/Detail/Deadline/deadline';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'grid',
      gridTemplateRows: '3% 10% 6% 50% 28% 3%',
      height: '100%',
      width: '100%'
    },
    title: {
      gridRow: '2'
    },
    deadline: {
      gridRow: '4'
    },
    compButton: {
      gridRow: '5',
      fontSize: '25px',
      width: '65%',
      margin: '0 auto'
    },
    deadlineContent: {
      width: '100%',
      height: '100%',
      fontSize: '35px',
      marginTop: '10px'
    }
  })
);

type DeadlineProps = {
  deadline: number | null;
  createFormat: (date: number) => string;
  isCompParam: Color | null;
  name: string;
  reverseComplete: () => Promise<void>;
  open: boolean;
  editOpen: () => void;
  editClose: () => void;
};

const Deadline: React.FC<DeadlineProps> = (props: DeadlineProps) => {
  const {
    deadline = null,
    createFormat = () => undefined,
    isCompParam = null,
    name = '',
    reverseComplete = () => undefined,
    open = false,
    editOpen = () => undefined,
    editClose = () => undefined
  } = props;
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <Box className={styles.title}>
        <Typography>DEADLINE</Typography>
        <IconButton onClick={editOpen}>
          <EditIcon />
        </IconButton>
      </Box>
      <Box className={styles.deadline}>
        <Typography className={styles.deadlineContent}>
          {deadline ? createFormat(deadline) : '未登録'}
        </Typography>
      </Box>
      <Button
        className={styles.compButton}
        style={{ ...isCompParam }}
        onClick={reverseComplete}
      >
        {name}
      </Button>
      <EditDialog open={open} onClose={editClose} />
    </Box>
  );
};

export default Deadline;

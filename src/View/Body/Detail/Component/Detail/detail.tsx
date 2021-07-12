import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import BackIcon from '@material-ui/icons/ArrowBackIos';

import { DtData } from '../../Container/data';
import Todo from '../../Container/Detail/Todo/todo';
import Memo from '../../Container/Detail/Memo/memo';
import Deadline from '../../Container/Detail/Deadline/deadline';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    deadlineCommon: {
      display: 'grid',
      gridRow: '1',
      gridColumn: '1'
    },
    memoCommon: {
      display: 'grid',
      gridRow: '3',
      gridColumn: '1'
    },
    todoCommon: {
      display: 'grid',
      gridRow: '1 / span 3',
      gridColumn: '3'
    },
    backfab: {
      position: 'absolute',
      bottom: '2rem',
      left: '2rem',
      '&:hover': {
        backgroundColor: '#6666ff'
      }
    }
  })
);

type DetailProps = {
  datas: DtData | null;
  backClick: () => void;
};

const Detail: React.FC<DetailProps> = (props: DetailProps) => {
  const { datas = null, backClick = () => undefined } = props;
  const styles = useStyle();

  return (
    <>
      <Paper className={styles.deadlineCommon}>
        <Deadline />
      </Paper>
      <Paper className={styles.memoCommon}>
        <Memo />
      </Paper>
      <Paper className={styles.todoCommon}>
        <Todo datas={datas === null ? null : datas} />
      </Paper>
      <Fab
        className={styles.backfab}
        onClick={backClick}
        color='primary'
        aria-label='add'
      >
        <BackIcon />
      </Fab>
    </>
  );
};

export default Detail;

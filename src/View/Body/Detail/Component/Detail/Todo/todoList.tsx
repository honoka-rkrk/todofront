import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import TodoTable from '../../../Container/Detail/Todo/todoTable';
import { DtData } from '../../../Container/data';
import RegisterDialog from '../../../Container/Detail/Todo/registerDialog';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    baseCommon: {
      padding: '2rem',
      textAlign: 'center'
    },
    message: {
      variant: 'subtitle1'
    },
    button: {
      variant: 'contained',
      color: '#ffffff',
      backgroundColor: `${theme.palette.primary.main}`,
      '&:hover': {
        backgroundColor: '#6666ff'
      }
    },
    addfab: {
      position: 'absolute',
      bottom: '2rem',
      right: '2rem',
      '&:hover': {
        backgroundColor: '#6666ff'
      }
    }
  })
);

type TodoListProps = {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  tasks: DtData | null;
  setTasks: React.Dispatch<React.SetStateAction<DtData | null>>;
};

const TodoList: React.FC<TodoListProps> = (props: TodoListProps) => {
  const {
    open = false,
    handleOpen = () => undefined,
    handleClose = () => undefined,
    tasks = null,
    setTasks = () => undefined
  } = props;
  const styles = useStyles();

  return (
    <>
      <Box className={styles.baseCommon}>
        {tasks ? (
          <>
            <TodoTable tasks={tasks} setTasks={setTasks} />
            <Fab
              className={styles.addfab}
              onClick={handleOpen}
              color='primary'
              aria-label='add'
            >
              <AddIcon />
            </Fab>
          </>
        ) : (
          <>
            <Typography className={styles.message} gutterBottom>
              まだ登録されたタスクはありません。
            </Typography>
            <Button className={styles.button} onClick={handleOpen}>
              タスクを登録する
            </Button>
          </>
        )}
      </Box>
      <RegisterDialog open={open} onClose={handleClose} setTasks={setTasks} />
    </>
  );
};

export default TodoList;

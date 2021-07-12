import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

import RegisterDialogContent from '../../../Container/Detail/Todo/registerDialogContent';

type RegisterDialogProps = {
  open: boolean;
  onClose: () => void;
  setTaskContent: React.Dispatch<React.SetStateAction<string>>;
  taskDeadline: Date;
  setTaskDeadline: React.Dispatch<React.SetStateAction<Date>>;
  taskPriority: number;
  setTaskPriority: React.Dispatch<React.SetStateAction<number>>;
  handleRegister: () => void;
};

const RegisterDialog: React.FC<RegisterDialogProps> = (
  props: RegisterDialogProps
) => {
  const {
    open = false,
    onClose = () => undefined,
    setTaskContent = () => undefined,
    taskDeadline = new Date(),
    setTaskDeadline = () => undefined,
    taskPriority = -1,
    setTaskPriority = () => undefined,
    handleRegister = () => undefined
  } = props;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby='form-dialog-title'
      fullWidth
    >
      <DialogTitle>タスク登録</DialogTitle>
      <RegisterDialogContent
        setTaskContent={setTaskContent}
        taskDeadline={taskDeadline}
        setTaskDeadline={setTaskDeadline}
        taskPriority={taskPriority}
        setTaskPriority={setTaskPriority}
      />
      <DialogActions>
        <Button onClick={onClose} color='primary'>
          戻る
        </Button>
        <Button color='primary' onClick={handleRegister}>
          登録
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RegisterDialog;

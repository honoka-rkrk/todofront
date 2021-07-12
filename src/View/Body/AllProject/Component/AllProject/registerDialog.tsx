import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

import RegisterDialogContent from '../../Container/AllProject/registerDIalogContent';

type RegisterDialogProps = {
  open: boolean;
  onClose: () => void;
  setPjName: React.Dispatch<React.SetStateAction<string>>;
  pjDeadline: Date;
  setPjDeadline: React.Dispatch<React.SetStateAction<Date>>;
  registerClick: (_deadline: Date) => Promise<void>;
};

const RegisterDialog: React.FC<RegisterDialogProps> = (
  props: RegisterDialogProps
) => {
  const {
    open = false,
    onClose = () => undefined,
    setPjName = () => undefined,
    pjDeadline = new Date(),
    setPjDeadline = () => undefined,
    registerClick = () => undefined
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
        setPjName={setPjName}
        pjDeadline={pjDeadline}
        setPjDeadline={setPjDeadline}
      />
      <DialogActions>
        <Button onClick={onClose} color='primary'>
          戻る
        </Button>
        <Button color='primary' onClick={() => registerClick(pjDeadline)}>
          登録
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RegisterDialog;

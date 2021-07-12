import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

import EditDialogContent from '../../../Container/Detail/Deadline/editDialogContent';

type EditDialogProps = {
  open: boolean;
  onClose: () => void;
  updClick: () => void;
  pjName: string;
  setPjName: React.Dispatch<React.SetStateAction<string>>;
  pjDeadline: Date;
  setPjDeadline: React.Dispatch<React.SetStateAction<Date>>;
};

const EditDialog: React.FC<EditDialogProps> = (props: EditDialogProps) => {
  const {
    open = false,
    onClose = () => undefined,
    updClick = () => undefined,
    pjName = '',
    setPjName = () => undefined,
    pjDeadline = new Date(),
    setPjDeadline = () => undefined
  } = props;
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>編集</DialogTitle>
      <EditDialogContent
        pjName={pjName}
        setPjName={setPjName}
        pjDeadline={pjDeadline}
        setPjDeadline={setPjDeadline}
      />
      <DialogActions>
        <Button onClick={onClose} color='primary'>
          戻る
        </Button>
        <Button color='primary' onClick={updClick}>
          登録
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditDialog;

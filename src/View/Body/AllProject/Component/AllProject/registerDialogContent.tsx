import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

type RegisterDialogContentProps = {
  handleNameChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  pjDeadline: Date;
  handleDeadlineChange: (date: any) => void;
};

const RegisterDialogContent: React.FC<RegisterDialogContentProps> = (
  props: RegisterDialogContentProps
) => {
  const {
    handleNameChange = () => undefined,
    pjDeadline = -1,
    handleDeadlineChange = () => undefined
  } = props;

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DialogContent>
        <DialogContentText>
          登録するプロジェクトの情報を入力してください
        </DialogContentText>
        <Grid container spacing={6} direction='column'>
          <Grid item>
            <TextField
              onChange={handleNameChange}
              margin='dense'
              id='name'
              label='内容'
              fullWidth
              autoFocus
            />
            <KeyboardDatePicker
              disableToolbar
              variant='inline'
              format='yyyy/MM/dd'
              minDate={new Date()}
              margin='normal'
              id='date-picker-inline'
              label='期限'
              value={pjDeadline}
              onChange={(date) => handleDeadlineChange(date)}
              invalidDateMessage='無効な形式です'
              minDateMessage='昨日以前の日付を指定することはできません'
            />
          </Grid>
        </Grid>
      </DialogContent>
    </MuiPickersUtilsProvider>
  );
};

export default RegisterDialogContent;

import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

type RegisterDialogContentProps = {
  handleContentChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  taskDeadline: Date;
  handleDeadlineChange: (date: any) => void;
  taskPriority: number;
  handleSliderChange: (e: React.ChangeEvent<{}>, newValue: any) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: () => void;
};

const RegisterDialogContent: React.FC<RegisterDialogContentProps> = (
  props: RegisterDialogContentProps
) => {
  const {
    handleContentChange = () => undefined,
    taskDeadline = -1,
    handleDeadlineChange = () => undefined,
    taskPriority = -1,
    handleSliderChange = () => undefined,
    handleInputChange = () => undefined,
    handleBlur = () => undefined
  } = props;

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DialogContent>
        <DialogContentText>登録するタスクの情報を入力してください</DialogContentText>
        <Grid container spacing={6} direction='column'>
          <Grid item>
            <TextField
              onChange={handleContentChange}
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
              value={taskDeadline}
              onChange={(date) => handleDeadlineChange(date)}
              invalidDateMessage='無効な形式です'
              minDateMessage='昨日以前の日付を指定することはできません'
            />
          </Grid>
          <Grid container item spacing={2}>
            <Grid item xs={2}>
              <DialogContentText>優先度</DialogContentText>
            </Grid>
            <Grid item xs={8}>
              <Slider
                value={taskPriority}
                onChange={handleSliderChange}
                defaultValue={1}
                aria-valuetext=''
                aria-labelledby='discrete-slider'
                valueLabelDisplay='on'
                step={1}
                marks
                min={1}
                max={5}
              />
            </Grid>
            <Grid item xs={2}>
              <Input
                value={taskPriority}
                margin='dense'
                onChange={handleInputChange}
                onBlur={handleBlur}
                inputProps={{
                  step: 1,
                  min: 1,
                  max: 5,
                  type: 'number',
                  'aria-labelledby': 'input-slider'
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </MuiPickersUtilsProvider>
  );
};

export default RegisterDialogContent;

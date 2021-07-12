import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'grid',
      gridTemplateRows: '3% 10% 6% 73% 8%',
      height: '100%',
      width: '100%'
    },
    title: {
      gridRow: '2'
    },
    memo: {
      gridRow: '4'
    },
    memoContent: {
      width: '90%',
      height: '100%'
    }
  })
);

type MemoProps = {
  content: string;
  inputContent: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Memo: React.FC<MemoProps> = (props: MemoProps) => {
  const { content = '', inputContent = () => undefined } = props;
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <Box className={styles.title}>
        <Typography>MEMO</Typography>
      </Box>
      <Box className={styles.memo}>
        <TextField
          className={styles.memoContent}
          type='text'
          value={content}
          onChange={inputContent}
          multiline
          rows={19}
        />
      </Box>
    </Box>
  );
};

export default Memo;

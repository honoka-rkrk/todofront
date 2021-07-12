import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { PjItemMeta } from '../../Container/data';

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  actions: {
    display: 'grid',
    height: '28%',
    gridTemplateColumns: '5% 40% 10% 40% 5%'
  },
  detail: {
    gridColumn: '2',
    size: 'small'
  },
  delete: {
    gridColumn: '4'
  }
});

type DetailProjectProps = {
  meta: PjItemMeta;
  createFormat: (date: number) => string;
  detailClick: () => void;
  deleteClick: (index: number) => void;
};

const DetailProject: React.FC<DetailProjectProps> = (props: DetailProjectProps) => {
  const {
    meta,
    detailClick = () => undefined,
    createFormat = () => '',
    deleteClick = () => undefined
  } = props;
  const styles = useStyles();

  return (
    <Card className={styles.root} variant='outlined'>
      <CardContent>
        <Typography
          className={styles.title}
          color={meta.isComplete ? 'primary' : 'textSecondary'}
          gutterBottom
          data-testid='isComplete'
        >
          {meta.isComplete ? '完了済み' : '未完了'}
        </Typography>
        <Typography variant='h5' component='h2' data-testid='pjName'>
          {meta.name}
        </Typography>
        <Typography className={styles.pos} color='textSecondary' data-testid='date'>
          {createFormat(meta.deadline)}
        </Typography>
      </CardContent>
      <CardActions className={styles.actions}>
        <Button
          className={styles.detail}
          onClick={() => detailClick()}
          data-testid='detailButton'
        >
          Detail
        </Button>
        <IconButton className={styles.delete} onClick={() => deleteClick(meta.id)}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default DetailProject;

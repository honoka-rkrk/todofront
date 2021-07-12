import React from 'react';
import { PjMeta } from '../../Container/data';
import { makeStyles, createStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import DetailProject from '../../Container/AllProject/detailProject';
import RegisterDialog from '../../Container/AllProject/registerDialog';

const useStyles = makeStyles(() =>
  createStyles({
    common: {
      marginTop: '30px'
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

type AllProjectProps = {
  metas: PjMeta | null;
  setMetas: React.Dispatch<React.SetStateAction<PjMeta | null>>;
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  deleteClick: (index: number) => void;
};

const AllProject: React.FC<AllProjectProps> = (props: AllProjectProps) => {
  const {
    metas = null,
    setMetas = () => undefined,
    open = false,
    handleOpen = () => undefined,
    handleClose = () => undefined,
    deleteClick = () => undefined
  } = props;
  const styles = useStyles();
  return (
    <>
      {metas && metas.pjMetas
        ? metas.pjMetas.map((meta, idx) =>
            meta !== null ? (
              <Box className={styles.common} data-testid='pj'>
                <DetailProject
                  key={`${meta.name}_${idx}`}
                  meta={meta}
                  deleteClick={deleteClick}
                />
              </Box>
            ) : null
          )
        : null}
      <Fab
        className={styles.addfab}
        onClick={handleOpen}
        color='primary'
        aria-label='add'
        data-testid='addButton'
      >
        <AddIcon />
      </Fab>
      <RegisterDialog open={open} onClose={handleClose} setMetas={setMetas} />
    </>
  );
};

export default AllProject;

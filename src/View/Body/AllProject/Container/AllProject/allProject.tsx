import React, { useEffect, useState, useRef } from 'react';

import { getApi, deleteApi } from '../../../../../Api/api';
import { PjMeta } from '../data';
import CompAllProject from '../../Component/AllProject/allProject';

const AllProject: React.FC = () => {
  const [metas, setMetas] = useState<PjMeta | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  //最初にデータを取る
  useEffect(() => {
    let unmounted = false;
    let id: number;
    const initial = async () => {
      if (metas === null) {
        const apiMeta = await getApi('/manageapp/project');
        if (!unmounted)
          setMetas(apiMeta.data ? { pjMetas: apiMeta.data } : { pjMetas: null });
      }
    };

    const timer = () => {
      initial();
      return window.setTimeout(() => {
        id = timer();
      }, 1000);
    };
    id = timer();
    return () => {
      unmounted = true;
      clearTimeout(id);
    };
  }, [metas]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //プロジェクトの消去処理
  const handleDelete = async (index: number) => {
    const api = await deleteApi(`/manageapp/project/${index}`);
    if (api.success) {
      console.log('success');
      const api = await getApi(`/manageapp/project`);
      if (api.success) {
        setMetas({ pjMetas: api.data });
      }
    }
  };

  const deleteClick = (index: number) => {
    handleDelete(index);
  };

  return (
    <CompAllProject
      metas={metas}
      setMetas={setMetas}
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
      deleteClick={deleteClick}
    />
  );
};

export default AllProject;

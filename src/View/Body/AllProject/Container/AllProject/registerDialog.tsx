import React, { useState } from 'react';

import { getApi, postApi } from '../../../../../Api/api';
import CompRegisterDialog from '../../Component/AllProject/registerDialog';
import { PjMeta } from '../data';

type RegisterDialogProps = {
  open: boolean;
  onClose: () => void;
  setMetas: React.Dispatch<React.SetStateAction<PjMeta | null>>;
};

const RegisterDialog: React.FC<RegisterDialogProps> = (
  props: RegisterDialogProps
) => {
  const { open, onClose, setMetas } = props;
  const [pjName, setPjName] = useState<string>('');
  const [pjDeadline, setPjDeadline] = useState<Date>(new Date());

  const getProject = async () => {
    const getProjectApi = await getApi('/manageapp/project');
    if (getProjectApi.success) {
      console.log('success');
      console.log(getProjectApi.data);
      setMetas({ pjMetas: getProjectApi.data });
    }
  };

  const registerClick = async (_deadline: Date) => {
    const year = String(_deadline.getFullYear());
    let month = String(_deadline.getMonth() + 1);
    month = ('0' + month).slice(-2);
    let day = String(_deadline.getDate());
    day = ('0' + day).slice(-2);
    const date = Number(year + month + day);
    const api = await postApi('/manageapp/project/', {
      deadline: date,
      name: pjName,
      isComplete: false,
      memo: 'メモを書くことができます',
      todoNo: 4
    });
    if (api.success) {
      console.log('success');
      getProject();
    } else {
      console.log('error');
    }
    onClose();
  };

  return (
    <>
      <CompRegisterDialog
        open={open}
        onClose={onClose}
        setPjName={setPjName}
        pjDeadline={pjDeadline}
        setPjDeadline={setPjDeadline}
        registerClick={registerClick}
      />
    </>
  );
};

export default RegisterDialog;

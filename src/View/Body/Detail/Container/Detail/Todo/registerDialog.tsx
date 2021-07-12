import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { postApi, getApi } from '../../../../../../Api/api';
import { RootState } from '../../../../../../Store/rootReducer';
import CompRegisterDialog from '../../../Component/Detail/Todo/registerDialog';
import { DtData } from '../../data';

type RegisterDialogProps = {
  open: boolean;
  onClose: () => void;
  setTasks: React.Dispatch<React.SetStateAction<DtData | null>>;
};

const RegisterDialog: React.FC<RegisterDialogProps> = (
  props: RegisterDialogProps
) => {
  const { open, onClose, setTasks } = props;
  const [taskContent, setTaskContent] = useState<string>('');
  const [taskDeadline, setTaskDeadline] = useState<Date>(new Date());
  const [taskPriority, setTaskPriority] = useState<number>(1);
  const detailInfo = useSelector((state: RootState) => state.detail.detailInfo);

  const getTodo = async () => {
    if (detailInfo) {
      const getTodoApi = await getApi(`/manageapp/todo/?todoNo=${detailInfo.id}`);
      if (getTodoApi.success) {
        setTasks({ dtDatas: getTodoApi.data });
      }
    }
  };

  const registerApi = async () => {
    const year = String(taskDeadline.getFullYear());
    let month = String(taskDeadline.getMonth() + 1);
    month = ('0' + month).slice(-2);
    let day = String(taskDeadline.getDate());
    day = ('0' + day).slice(-2);
    const date = Number(year + month + day);
    if (detailInfo) {
      const api = await postApi('/manageapp/todo/', {
        todoNo: detailInfo.id,
        content: taskContent,
        deadline: date,
        priority: taskPriority
      });
      if (api.success) {
        console.log('success');
        getTodo();
      } else {
        console.log('error');
      }
    }
  };

  const handleRegister = () => {
    registerApi();
    onClose();
  };

  return (
    <>
      <CompRegisterDialog
        open={open}
        onClose={onClose}
        setTaskContent={setTaskContent}
        taskDeadline={taskDeadline}
        setTaskDeadline={setTaskDeadline}
        taskPriority={taskPriority}
        setTaskPriority={setTaskPriority}
        handleRegister={handleRegister}
      />
    </>
  );
};

export default RegisterDialog;

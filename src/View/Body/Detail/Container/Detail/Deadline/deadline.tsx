import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../../../../../Store/rootReducer';
import CompDeadline from '../../../Component/Detail/Deadline/deadline';
import { hexIsDark } from '../../data';
import { putApi, getApi } from '../../../../../../Api/api';
import { setDetailInfo } from '../../../../../../Store/selectDetail';

export type Color = {
  backgroundColor: string;
  color: string;
};

const Deadline: React.FC = () => {
  const detailInfo = useSelector((state: RootState) => state.detail.detailInfo);
  const [isCompParam, setIsCompParam] = useState<Color>({
    backgroundColor: '#1976D2',
    color: '#ffffff'
  });
  const [name, setName] = useState<string>('未完了');
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (detailInfo) {
      const _name = detailInfo.isComplete ? '完了済' : '未完了';
      const _bgColor = detailInfo.isComplete ? '#e91e63' : '#1976D2';
      const _frColor = hexIsDark(_bgColor) ? '#ffffff' : '#000000';
      setIsCompParam({ backgroundColor: _bgColor, color: _frColor });
      setName(_name);
    }
  }, [detailInfo]);

  const createFormat = (date: number) => {
    const dateString = String(date);
    const year = dateString.substring(0, 4);
    const month = dateString.substring(4, 6);
    const day = dateString.substring(6);
    const formatDate = year + '/' + month + '/' + day;

    return formatDate;
  };

  const reverseComplete = async () => {
    if (detailInfo) {
      const hold = detailInfo.isComplete;
      const _isComplete = hold ? false : true;
      const api = await putApi(`/manageapp/project/${detailInfo.id}/`, {
        deadline: detailInfo.deadline,
        name: detailInfo.name,
        isComplete: _isComplete,
        memo: detailInfo.memo
      });
      if (api.success) {
        const pjData = api.data;
        dispatch(
          setDetailInfo({
            id: pjData.id,
            deadline: pjData.deadline,
            name: pjData.name,
            isComplete: pjData.isComplete,
            memo: pjData.memo,
            order: pjData.order,
            orderBy: pjData.orderBy
          })
        );
      } else {
        console.log('error');
      }
    }
  };

  const editOpen = () => {
    setOpen(true);
  };

  const editClose = () => {
    setOpen(false);
  };

  return (
    <CompDeadline
      deadline={detailInfo === null ? null : detailInfo.deadline}
      createFormat={createFormat}
      isCompParam={isCompParam}
      name={name}
      reverseComplete={reverseComplete}
      open={open}
      editOpen={editOpen}
      editClose={editClose}
    />
  );
};

export default Deadline;

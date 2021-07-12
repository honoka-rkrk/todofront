import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { putApi } from '../../../../../../Api/api';
import { RootState } from '../../../../../../Store/rootReducer';
import { setDetailInfo } from '../../../../../../Store/selectDetail';
import CompEditDialog from '../../../Component/Detail/Deadline/editDialog';

type EditDialogProps = {
  open: boolean;
  onClose: () => void;
};

const EditDialog: React.FC<EditDialogProps> = (props: EditDialogProps) => {
  const { open, onClose } = props;
  const detailInfo = useSelector((state: RootState) => state.detail.detailInfo);
  const [pjName, setPjName] = useState<string>('');
  const [pjDeadline, setPjDeadline] = useState<Date>(new Date());
  const initFlg = useRef<boolean>(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const unmounted = false;
    if (initFlg.current) {
      initFlg.current = false;
      if (!unmounted && detailInfo) {
        setPjName(detailInfo.name);
        if (detailInfo.deadline) {
          const strDate = String(detailInfo.deadline);
          const year = Number(strDate.substr(0, 4));
          const month = Number(strDate.substr(4, 2));
          const day = Number(strDate.substr(6, 2));
          setPjDeadline(new Date(year, month - 1, day));
        }
      }
    }
  }, [detailInfo]);

  const updApi = async () => {
    if (detailInfo) {
      const year = String(pjDeadline.getFullYear());
      let month = String(pjDeadline.getMonth() + 1);
      month = ('0' + month).slice(-2);
      let day = String(pjDeadline.getDate());
      day = ('0' + day).slice(-2);
      const date = Number(year + month + day);
      const updapi = await putApi(`/manageapp/project/${detailInfo.id}/`, {
        deadline: date,
        name: pjName,
        isComplete: detailInfo.isComplete,
        memo: detailInfo.memo,
        order: detailInfo.order,
        ordrerBy: detailInfo.orderBy
      });
      if (updapi.success) {
        const updData = updapi.data;
        dispatch(
          setDetailInfo({
            id: updData.id,
            deadline: updData.deadline,
            name: updData.name,
            isComplete: updData.isComplete,
            memo: updData.memo,
            order: updData.order,
            orderBy: updData.orderBy
          })
        );
      }
    }
  };

  const updClick = () => {
    updApi();
    onClose();
  };

  return (
    <CompEditDialog
      open={open}
      onClose={onClose}
      updClick={updClick}
      pjName={pjName}
      setPjName={setPjName}
      pjDeadline={pjDeadline}
      setPjDeadline={setPjDeadline}
    />
  );
};

export default EditDialog;

import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { PjItemMeta } from '../../Container/data';
import { useHistory } from 'react-router-dom';

import CompDetailProject from '../../Component/AllProject/detailProject';
import { setDetailInfo } from '../../../../../Store/selectDetail';

export type Color = {
  color: string;
};

type DetailProjectProps = {
  meta: PjItemMeta;
  deleteClick: (index: number) => void;
};

const DetailProject: React.FC<DetailProjectProps> = (props: DetailProjectProps) => {
  const { meta, deleteClick } = props;
  const dispatch = useDispatch();
  const history = useHistory();

  const detailClick = useCallback(() => {
    if (meta) {
      dispatch(
        setDetailInfo({
          id: meta.id,
          deadline: meta.deadline,
          name: meta.name,
          isComplete: meta.isComplete,
          memo: meta.memo,
          order: meta.order,
          orderBy: meta.orderBy
        })
      );
    }
    history.push('./detail');
  }, [history, dispatch, meta]);

  const createFormat = (date: number) => {
    const dateString = String(date);
    const year = dateString.substring(0, 4);
    const month = dateString.substring(4, 6);
    const day = dateString.substring(6);
    const formatDate = year + '/' + month + '/' + day;

    return formatDate;
  };

  return (
    <CompDetailProject
      meta={meta}
      detailClick={detailClick}
      createFormat={createFormat}
      deleteClick={deleteClick}
    />
  );
};

export default DetailProject;

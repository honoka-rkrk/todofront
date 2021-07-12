import React, { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getApi, putApi } from '../../../../../Api/api';
import { RootState } from '../../../../../Store/rootReducer';
import CompDetail from '../../Component/Detail/detail';
import { DtData } from '../data';

const Detail: React.FC = () => {
  const [datas, setDatas] = useState<DtData | null>(null);
  const detailInfo = useSelector((state: RootState) => state.detail.detailInfo);
  const history = useHistory();

  //最初にtodoのデータをとる
  useEffect(() => {
    let unmounted = false;
    let id: number;
    const initial = async () => {
      if (datas === null && detailInfo !== null) {
        const apiData = await getApi(`/manageapp/todo/?todoNo=${detailInfo.id}`);
        if (!unmounted)
          setDatas(apiData.data ? { dtDatas: apiData.data } : { dtDatas: null });
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
  }, [datas, detailInfo]);

  const backClick = useCallback(async () => {
    if (detailInfo) {
      const putTodoApi = await putApi(`/manageapp/project/${detailInfo.id}/`, {
        deadline: detailInfo.deadline,
        name: detailInfo.name,
        isComplete: detailInfo.isComplete,
        memo: detailInfo.memo
      });
      if (putTodoApi.success) {
        console.log('success');
      }
    }
    history.push('./project');
  }, [history, detailInfo]);

  return <CompDetail datas={datas} backClick={backClick} />;
};

export default Detail;

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../../../../../Store/rootReducer';
import CompMemo from '../../../Component/Detail/Memo/memo';
import { setMemo } from '../../../../../../Store/selectDetail';

const Memo: React.FC = () => {
  const detailInfo = useSelector((state: RootState) => state.detail.detailInfo);
  const [content, setContent] = useState<string>('');
  const dispatch = useDispatch();

  useEffect(() => {
    let unmounted = false;
    if (!unmounted && detailInfo) {
      setContent(detailInfo.memo);
    }
    return () => {
      unmounted = true;
    };
  }, [detailInfo]);

  const inputContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
    dispatch(setMemo(e.target.value));
  };

  return <CompMemo content={content} inputContent={inputContent} />;
};

export default Memo;

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import CompHeader from '../../Component/Header/header';
import { getHeaderInfo } from '../header-info';
import { useLocation } from 'react-router-dom';
import { RootState } from '../../../../Store/rootReducer';

const Header: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const location = useLocation();
  const detailInfo = useSelector((state: RootState) => state.detail.detailInfo);

  useEffect(() => {
    let unmounted = false;
    const hi = getHeaderInfo(location.pathname);
    if (!unmounted) {
      if (hi.title === 'DETAIL' && detailInfo) {
        setTitle(detailInfo.name);
      } else {
        setTitle(hi.title);
      }
    }
    return () => {
      unmounted = true;
    };
  }, [location.pathname]);

  return <CompHeader title={title} />;
};

export default Header;

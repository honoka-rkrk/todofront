import React from 'react';
import Home from '../View/Body/Home/Component/main';
import NotFound from '../View/Body/NotFound/Component/NotFound/notFound';
import AllProject from '../View/Body/AllProject/Component/main';
import Detail from '../View/Body/Detail/Component/main';

export interface RouteProps {
  path: string;
  exact: boolean | undefined;
  component: React.FC;
}

export const routes: RouteProps[] = [
  { path: '/', exact: true, component: AllProject },
  { path: '/project', exact: true, component: AllProject },
  { path: '/home', exact: undefined, component: Home },
  { path: '/detail', exact: undefined, component: Detail },
  { path: '*', exact: undefined, component: NotFound }
];

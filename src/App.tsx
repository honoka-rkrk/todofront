import React from 'react';
import Header from './View/Header/Component/main';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { CssBaseline } from '@material-ui/core';
import { useSelector } from 'react-redux';

import AllProject from './View/Body/AllProject/Component/main';
import { routes, RouteProps } from './Route/route';
import { RootState } from './Store/rootReducer';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    app: {
      textAlign: 'center',
      minHeight: '100vh'
    }
  })
);

const App: React.FC = () => {
  const styles = useStyle();
  const detailInfo = useSelector((state: RootState) => state.detail.detailInfo);
  const router = detailInfo !== null ? <DispRoute /> : <RedirectRoute />;
  return (
    <>
      <Box className={styles.app}>
        <CssBaseline />
        <Router>
          <Header />
          {router}
        </Router>
      </Box>
    </>
  );
};

export const DispRoute: React.FC = () => {
  return (
    <Switch>
      {routes.map((config: RouteProps) => (
        <Route key={`route_${config.path}`} {...config} />
      ))}
    </Switch>
  );
};

const RedirectRoute: React.FC = () => {
  return (
    <Switch>
      <Route path={'/'} exact component={AllProject} />
      <Redirect to='/' />
    </Switch>
  );
};

export default App;

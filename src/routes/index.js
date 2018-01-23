import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import EnsureAuth from './EnsureAuth';
import PreAuthRoutes from './PreAuthRoutes';
import PostAuthRoutes from './PostAuthRoutes';

import CommonContainer from '../view/Common/containers/CommonContainer';

import styles from './styles/index.scss';

const NotFound = () => (
  <div style={{ height: '100vh', width: '100vw' }}>
    <p>404</p>
  </div>
);

const Terms = () => (
  <div style={{ height: '100vh', width: '100vw' }}>
    <h2>Terms and Conditions</h2>
  </div>
);

export default props => (
  <div className={styles.container}>
    <Switch>
      <Route exact path={'/'} component={CommonContainer} />
      {/* <Route exact path={'/'} component={HomeContainer} />
      <Route exact path={'/404'} component={NotFound} />
      <Route path={'/auth'} component={PreAuthRoutes} />
      <EnsureAuth path={'/app'} component={PostAuthRoutes} />
      <Route path={'/terms'} component={Terms} />
      <Redirect to={'/404'} /> */}
    </Switch>
  </div>
);

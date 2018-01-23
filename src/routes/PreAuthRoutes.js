import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styles from './styles/index.scss';

// import Login from '../view/Login/components/Login';
// import PasswordCreate from '../view/Onboarding/components/PasswordCreate';

const PreAuthRoutes = ({ match }) => {
  return (
    <div className={styles.container}>
      {/* <Switch>
        <Route path={'/auth/login'} component={Login} />
        <Route path={'/auth/onboarding'} component={PasswordCreate} />
        <Redirect to={'/auth/login'} />
      </Switch> */}
    </div>
  );
};

export default PreAuthRoutes;

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styles from './styles/index.scss';

// import NavbarContainer from '../view/Navbar/containers/NavbarContainer';
// import DashboardContainer from '../view/Dashboard/containers/DashboardContainer';
// import SendContainer from '../view/Send/containers/SendContainer';
// import ReceiveContainer from '../view/Receive/containers/ReceiveContainer';

const PostAuthRoutes = ({ match }) => {
  return (
    <div className={styles.container}>
      {/* <NavbarContainer />
      <Switch>
        <Route exact path={'/app/dashboard'} component={DashboardContainer} />
        <Route exact path={'/app/send'} component={SendContainer} />
        <Route exact path={'/app/receive'} component={ReceiveContainer} />


        <Route
          path={'/app/transactions/:transactionId'}
          component={TransactionShowContainer}
        />
        <Route
          path={'/app/transactions'}
          component={TransactionsIndexContainer}
        />
        <Redirect to={`/app/dashboard`} />
      </Switch> */}
    </div>
  );
};

export default PostAuthRoutes;

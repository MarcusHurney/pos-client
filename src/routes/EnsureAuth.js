import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

class EnsureAuth extends Component {
  render() {
    const { component: Component, user_authenticated, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props => {
          return user_authenticated ? (
            <Component {...props} />
          ) : (
            <Redirect to="/auth/login" />
          );
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  user_authenticated: state.auth.user_authenticated
});

export default connect(mapStateToProps)(EnsureAuth);

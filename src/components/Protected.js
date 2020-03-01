import * as React from 'react';
import { Route } from 'react-router-dom';

export const ProtectedPage = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to='/login' />
      )
    }
  />
);

import * as React from 'react';
import { Route } from 'react-router-dom';
import LoginPopupContainer from '../containers/login/LoginPopupContainer';

export default ({ Component, ...rest}) =>
  <Route
    {...rest}
    render={
      props => (
        <LoginPopupContainer>
          <Component {...props}/>
        </LoginPopupContainer>
      )
    }
  />

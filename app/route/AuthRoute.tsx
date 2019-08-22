import * as React from 'react';
import { Route } from 'react-router-dom';
import Frame from '../containers/frame/Frame';
import LoginPopupContainer from '../containers/login/LoginPopupContainer';

export default ({ Component, ...rest}) =>
  <Route
    {...rest}
    render={
      props => (
        <Frame>
          <LoginPopupContainer>
            <Component {...props}/>
          </LoginPopupContainer>
        </Frame>
      )
    }
  />

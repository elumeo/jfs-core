import * as React from 'react';
import Frame from '../containers/frame/Frame';
import LoginPopupContainer from '../containers/login/LoginPopupContainer';
import BaseRoute from "./BaseRoute";

// noinspection JSUnusedGlobalSymbols
export default ({ Component, ...rest}) =>
  <BaseRoute
    {...rest}
    render={props => <Frame>
      <LoginPopupContainer>
        <Component {...props}/>
      </LoginPopupContainer>
    </Frame>}
  />

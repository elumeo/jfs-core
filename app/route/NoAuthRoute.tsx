import * as React from 'react';
import Frame from '../containers/frame/Frame';
import BaseRoute from "./BaseRoute";

export default ({Component, ...rest}) =>
  <BaseRoute
    {...rest}
    render={props => (
      <Frame>
        <Component {...props}/>
      </Frame>
    )}
  />

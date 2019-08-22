import * as React from 'react';
import { Route } from 'react-router-dom';
import Frame from '../containers/frame/Frame';

export default ({ Component, ...rest}) =>
  <Route
    {...rest}
    render={
      props => (
        <Frame>
          <Component {...props}/>
        </Frame>
      )
    }
  />

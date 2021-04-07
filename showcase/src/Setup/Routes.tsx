import * as React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import Content from '@elumeo/jfs-core/build/Component/Content/Content';
import AuthRoute from '@elumeo/jfs-core/build/Component/Route/AuthRoute';
import NoAuthRoute from '@elumeo/jfs-core/build/Component/Route/NoAuthRoute';
import Showcase from 'Component/Showcase';

const Routes: React.FC = () => (
  <Content>
    <Switch>
      <AuthRoute
        key='start'
        exact path='/start'
        component={Showcase}/>
      <NoAuthRoute
        key='default'
        exact path='/'
        component={() => <Redirect to={ { pathname: '/start' } }/>}/>
    </Switch>
  </Content>
);

export default Routes;

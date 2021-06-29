import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Content from 'Component/Content/Content';
import AuthRoute from 'Component/Route/AuthRoute';
import NoAuthRoute from 'Component/Route/NoAuthRoute';

const Routes: React.FC = () => (
  <Content>
    <Switch>
      <AuthRoute
        key='start'
        exact path='/start'
        component={() => <div></div>} />
      <NoAuthRoute
        key='default'
        exact path='/'
        component={() => <Redirect to={{ pathname: '/start' }} />} />
    </Switch>
  </Content>
);

export default Routes;

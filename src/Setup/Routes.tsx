import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import AuthRoute from 'Component/Route/AuthRoute';
import NoAuthRoute from 'Component/Route/NoAuthRoute';
import Develop from 'Component/develop';
import DevelopAppLayout from '../Component/developAppLayout';

const Routes: React.FC = () => (
  <Switch>
    <AuthRoute key='start' exact path='/start' component={() => <Develop />}/>
    <AuthRoute key='app_layout' exact path='/app_layout' component={() => <DevelopAppLayout />}/>
    <NoAuthRoute key='default' exact path='/' component={() => <Redirect to={{ pathname: '/start' }} />}/>
  </Switch>
);

export default Routes;

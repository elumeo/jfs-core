import * as React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import Content from '@elumeo/jfs-core/build/Component/Content/Content';
import AuthRoute from '@elumeo/jfs-core/build/Component/Route/AuthRoute';
import NoAuthRoute from '@elumeo/jfs-core/build/Component/Route/NoAuthRoute';
import Showcase from 'Component/Showcase';
import Styling from 'Component/Styling';
import Typo from 'Component/Typo';
import Icon from 'Component/Icon';
import Directory from 'Component/Directory';
import Module from 'Component/Module';
import ExampleCard from 'Component/ExampleCard';
const Routes: React.FC = () => (
  <Content>
    <Switch>
      <AuthRoute
        key='start'
        exact path='/start'
        component={Directory} />

      <AuthRoute
        key='Styling'
        exact path='/Styling'
        component={Styling} />
      <AuthRoute
        key='Typo'
        exact path='/Typo'
        component={Typo} />
      <AuthRoute
        key='Icon'
        exact path='/Icon'
        component={Icon} />
        <AuthRoute
          key='Module'
          exact path='/Module'
          component={Module} />
          <AuthRoute
            key='ExampleCard'
            exact path='/ExampleCard'
            component={ExampleCard} />
      <NoAuthRoute
        key='default'
        exact path='/'
        component={() => <Redirect to={{ pathname: '/start' }} />} />
    </Switch>
  </Content>
);

export default Routes;

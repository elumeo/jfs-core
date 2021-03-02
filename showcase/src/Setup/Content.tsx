import * as React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import Content from '@elumeo/jfs-core/build/Component/Content/Content';
import AuthRoute from '@elumeo/jfs-core/build/Component/Route/AuthRoute';
import NoAuthRoute from '@elumeo/jfs-core/build/Component/Route/NoAuthRoute';
import Settings from '@elumeo/jfs-core/build/Component/Settings/SettingsContainer';

import Boilerplate from 'Component/Boilerplate';

export default () => (
  <Content>
    <Switch>
      <AuthRoute
        key={'start'}
        exact path={`/start`}
        component={Boilerplate}
      />
      <NoAuthRoute
        key={'settings'}
        translationId={'app.settings'}
        exact path={`/settings`}
        component={Settings}
      />
      <NoAuthRoute
        key={'default'}
        exact path={'/'}
        component={() => <Redirect to={ { pathname: '/start' } }/>}
      />
    </Switch>
  </Content>
);

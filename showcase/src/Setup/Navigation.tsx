import React from 'react';
import _ from 'lodash';
import Divider from '@material-ui/core/Divider';
import NavigationDrawer from '@elumeo/jfs-core/build/Component/Navigation/NavigationDrawer';
import NavigationItem from '@elumeo/jfs-core/build/Component/Navigation/NavigationItem';

import SettingsNavigationItem from '@elumeo/jfs-core/build/Component/Settings/SettingsNavigationItem';
import LogoutNavigationItem from '@elumeo/jfs-core/build/Component/Logout/LogoutNavigationItem';

export default () => (
  <NavigationDrawer position='left'>
    <NavigationItem
      iconName='account_box'
      messageId='app.login'
      unauthorizedOnly
      onClickRoute='/start'
    />
    <NavigationItem
      iconName='home'
      messageId='app.title'
      onClickRoute='/start'
      authorizedOnly
    />
    <Divider key={_.uniqueId('navItem_')}/>
    <SettingsNavigationItem/>
    <Divider key={_.uniqueId('navItem_')}/>
    <LogoutNavigationItem/>
  </NavigationDrawer>
);

import * as React from 'react';
import * as _ from 'lodash';
import Divider from '@material-ui/core/Dividers';
import NavigationDrawer from 'Component/Navigation/NavigationDrawer';
import NavigationItem from 'Core/Component/Navigation/NavigationItem';

import SettingsNavigationItem from 'Core/Component/Settings/SettingsNavigationItem';
import LogoutNavigationItem from 'Core/Component/Logout/LogoutNavigationItem';
import VersionNavigationItem from 'Core/Component/Misc/VersionNavigationItem';

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
    <VersionNavigationItem/>
  </NavigationDrawer>
);

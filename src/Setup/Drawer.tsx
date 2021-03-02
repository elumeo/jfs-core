import * as React from 'react';
import { uniqueId } from 'lodash';
import Divider from '@material-ui/core/Divider';
import NavigationDrawer from 'Component/Navigation/NavigationDrawer';
import NavigationItem from 'Component/Navigation/NavigationItem';

import SettingsNavigationItem from 'Component/Settings/SettingsNavigationItem';
import LogoutNavigationItem from 'Component/Logout/LogoutNavigationItem';
import _ from 'lodash';
const Drawer = () => {
  return <NavigationDrawer position='left'>
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
    <Divider key={uniqueId('navItem_')} />
    <SettingsNavigationItem />

    <Divider key={uniqueId('navItem_')} />

    <LogoutNavigationItem />
    {/* <VersionNavigationItem /> */}
  </NavigationDrawer>
};

export default Drawer

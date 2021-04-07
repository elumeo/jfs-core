import React from 'react';
import * as MUI from '@material-ui/core';
import * as Navigation from '@elumeo/jfs-core/build/Component/Navigation';
import * as Logout from '@elumeo/jfs-core/build/Component/Logout';
import * as Settings from '@elumeo/jfs-core/build/Component/Settings';

const Drawer: React.FC = () => (
  <Navigation.Drawer>
    <Navigation.Item
      iconName='account_box'
      messageId='app.login'
      unauthorizedOnly
      onClickRoute='/start'/>
    <Navigation.Item
      iconName='home'
      messageId='app.title'
      onClickRoute='/start'
      authorizedOnly/>
    <MUI.Divider/>
    <Settings.NavigationItem/>
    <MUI.Divider/>
    <Logout.NavigationItem/>
    {/* <VersionNavigationItem /> */}
  </Navigation.Drawer>
);

export default Drawer;

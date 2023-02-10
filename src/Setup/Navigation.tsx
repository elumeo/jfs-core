import React from 'react';
import Divider from '@mui/material/Divider';
import * as Navigation from 'Component/Navigation';
import * as Logout from 'Component/Logout';
import * as Settings from 'Component/Settings';

const Drawer: React.FC = () => (
  <Navigation.Drawer>
    <Navigation.Item
      iconName='account_box'
      messageId='app.login'
      unauthorizedOnly
      onClickRoute='/start'
    />
    <Navigation.Item
      iconName='home'
      messageId='app.title'
      onClickRoute='/start'
      authorizedOnly
    />
    <Divider />
    <Settings.NavigationItem />
    <Divider />
    <Logout.NavigationItem />
    {/* <VersionNavigationItem /> */}
  </Navigation.Drawer>
);

export default Drawer;

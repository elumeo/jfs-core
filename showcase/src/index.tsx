import '@elumeo/jfs-core/build/Setup';
import 'jfc-hello-world/build';

declare const module: any;
if (module.hot) {
  module.hot.accept();
}

import React from 'react';
import { render } from 'react-dom';

import App from '@elumeo/jfs-core/build/Component/App/App';
import LoginDialog from '@elumeo/jfs-core/build/Component/Login/LoginDialog';
import LogoutDialog from '@elumeo/jfs-core/build/Component/Logout/LogoutDialog';
import NotificationDrawer from '@elumeo/jfs-core/build/Component/Notification/NotificationDrawer';
import OnScreenNotifications from '@elumeo/jfs-core/build/Component/Notification/OnScreenNotifications';

import packageJson from '../package.json';
import Store from 'Store';
import Header from 'Setup/Header';
import NavigationDrawer from 'Setup/Navigation';
import SettingsDialog from 'Setup/Settings';
import Content from 'Setup/Content';
import Translations from 'Setup/Translations.json';

render(
  <App
    store={Store}
    translations={Translations}
    packageJson={packageJson}>
    <Content/>
    <Header/>
    <LoginDialog/>
    <NavigationDrawer/>
    <SettingsDialog/>
    <LogoutDialog/>
    <NotificationDrawer/>
    <OnScreenNotifications/>
  </App>,
  document.getElementById('root')
);

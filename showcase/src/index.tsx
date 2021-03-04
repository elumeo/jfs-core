import '@elumeo/jfs-core/build/Setup';

declare const module: any;
if (module.hot) {
  module.hot.accept();
}

import React from 'react';
import { render } from 'react-dom';
import _ from 'lodash';

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
import CoreTranslations from '@elumeo/jfs-core/build/Setup/Translations.json';
import HelloWorldTranslations from 'jfc-hello-world/build/Setup/Translations.json';
import Translations from 'Setup/Translations.json';

render(
  <App
    store={Store}
    translations={_.merge(
      CoreTranslations,
      HelloWorldTranslations,
      Translations
    )}
    packageJson={packageJson}>
    <Header/>
    <Content/>
    <LoginDialog/>
    <NavigationDrawer/>
    <SettingsDialog/>
    <LogoutDialog/>
    <NotificationDrawer/>
    <OnScreenNotifications/>
  </App>,
  document.getElementById('root')
);

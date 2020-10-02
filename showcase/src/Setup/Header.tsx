import * as React from 'react';
import AppHeader from 'Core/Component/Header/AppHeader';
import BackendIndicator from 'Core/Component/Header/BackendIndicator';
import SettingsButton from 'Core/Component/Settings/SettingsButton';
import WebSocketStatus from 'Core/Component/Websocket/WebSocketStatus';
import NotificationBadge from 'Core/Component/Notification/NotificationBadge';
import Search from 'Component/Search';

export default () => (
  <AppHeader
    leftTools={
      () => (
        <>
          <BackendIndicator/>
        </>
      )
    }
    rightTools={
      () => (
        <>
          <WebSocketStatus />
          <Search className='tool'/>
          <SettingsButton/>
          <NotificationBadge/>
        </>
      )
    }
  />
);

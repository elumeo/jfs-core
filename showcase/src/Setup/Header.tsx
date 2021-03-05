import * as React from 'react';
import AppHeader from '@elumeo/jfs-core/build/Component/Header/AppHeader';
import BackendIndicator from '@elumeo/jfs-core/build/Component/Header/BackendIndicator';
import SettingsButton from '@elumeo/jfs-core/build/Component/Settings/SettingsButton';
import NotificationBadge from '@elumeo/jfs-core/build/Component/Notification/NotificationBadge';
// import Search from '@elumeo/jfs-core/build/Component/Search/SearchComponent';^
import WSStatus from '@elumeo/jfs-core/build/Component/Websocket/WebSocketStatus'; 

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
          {/* <Search/> */}
          <WSStatus/>
          <SettingsButton/>
          <NotificationBadge/>
        </>
      )
    }
  />
);

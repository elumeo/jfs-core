import React from 'react';
import { createRoot } from 'react-dom/client';
import _ from 'lodash';
import App from '@elumeo/jfs-core/build/Component/App';
import * as Login from '@elumeo/jfs-core/build/Component/Login';
import * as Logout from '@elumeo/jfs-core/build/Component/Logout';
import * as Settings from '@elumeo/jfs-core/build/Component/Settings';
import * as Language from '@elumeo/jfs-core/build/Component/Language';
import * as Header from '@elumeo/jfs-core/build/Component/Header';
import Snackbar from '@elumeo/jfs-core/build/Component/Snackbar';
import * as Notification from '@elumeo/jfs-core/build/Component/Notification';
import { Translations as CoreTranslations } from '@elumeo/jfs-core/build/Setup';
import Translations from 'Setup/Translations.json';
import Navigation from 'Setup/Navigation';
import packageJson from '../package.json';
import store from 'Store';
import Routes from 'Setup/Routes';
import HelloWorldTranslations from '@scharfohnezwiebeln/jfc-hello-world/build/Setup/Translations.json';

import * as MUI from '@mui/material';
import * as LAB from '@mui/lab';
const root = createRoot(
  document.getElementById('root')

)
root.render(
  <App
    store={store}
    title={'Showcase'}
    translations={_.merge(
      CoreTranslations,
      HelloWorldTranslations,
      Translations
    )}
    packageJSON={packageJson}>
    <Header.AppToolbar
      left={<Header.BackendIndicator />}
      middle={
        <div style={{ width: 300 }}>
          <LAB.Autocomplete
            fullWidth
            options={['one', 'two', 'three']}
            renderInput={params => (
              <MUI.TextField
                placeholder='Search for ...'
                variant='filled'
                {...params}
                inputProps={{
                  ...params.inputProps,
                  style: {
                    ...(params.inputProps as { style: React.CSSProperties })
                      .style,
                    color: 'white'
                  }
                }} />
            )} />
        </div>
      }
      right={
        <>
          <Settings.Button />
          <Notification.Button.Show />
        </>
      } />
    <Navigation />
    <Login.Dialog />
    <Logout.Dialog />
    <Settings.Dialog>
      <Language.Settings />
    </Settings.Dialog>
    <Routes />
    <Snackbar />
  </App>
);

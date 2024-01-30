import './wdyr';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../Component/App';
import * as Login from '../Component/Login';
import * as Logout from '../Component/Logout';
import * as Settings from '../Component/Settings';
import * as Language from '../Component/Language';
import * as Header from '../Component/Header';
import reducer from '../Store/Reducer/Global';
import epic from '../Store/Epic';
import * as Notification from '../Component/Notification';
import Snackbar from '../Component/Snackbar';
import Overlay from '../Component/Overlay';
import { Navigation, Translations } from '../Setup';
import packageJson from '../../package.json';
import { create } from '../Store';
import Indicator from '../Component/WebSocket/Room/Status/Indicator';
import DebugButton from '../Component/Button/DebugButton';
import Routes from './Routes';
import actionsToLog from './Debug/actionsToLog';
import Mapper from './Debug/Mapper';

declare const module: { hot: { accept: () => void } };
declare const window: Window & { core_reactRoot: ReturnType<typeof createRoot> }

if (module.hot) {
  module.hot.accept();
}
const doc = document.getElementById('root')

if (window['core_reactRoot'] === undefined && doc !== null) {
  window['core_reactRoot'] = createRoot(doc);
}

window['core_reactRoot'].render(<App
  store={create(epic, reducer)}
  title='core'
  translations={Translations}
  packageJSON={packageJson}
>
  <Routes
    header={<Header.AppToolbar
      left={<Header.BackendIndicator />}
      right={
        <>
          <Indicator client={{
            Host: 'https://api-test.juwelo.de',
            Path: '/staging/websocket2.services',
            PrivateNamespace: 'Jsc2Jfs',
            AutoRoomSubscriptions: ['currentGame', 'plannedGames']
          }} roomName={'currentGame'}/>
          <Settings.Button/>
          <DebugButton
            actions={actionsToLog}
            mapper={Mapper}
            filter={() => true}
          />
          <Notification.Button.Show/>
        </>
      }
    />}
    overlays={<Overlay>
      <Navigation />
      <Login.Dialog />
      <Logout.Dialog />
      <Settings.Dialog>
        <Language.Settings />
      </Settings.Dialog>
      <Snackbar />
    </Overlay>}
  />
</App>);


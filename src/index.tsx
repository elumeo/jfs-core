// import './wdyr';
// import React from 'react';
// import { render } from 'react-dom';
// import App from 'Component/App';
// import * as Login from 'Component/Login';
// import * as Logout from 'Component/Logout';
// import * as Settings from 'Component/Settings';
// import * as Language from 'Component/Language';
// import * as Header from 'Component/Header';
// import reducer from './Store/Reducer/Global';
// import epic from './Store/Epic';
// import * as Notification from 'Component/Notification';
// import Snackbar from 'Component/Snackbar';
// import Overlay from 'Component/Overlay';
// import { Navigation, Routes, Translations } from 'Setup';
// import packageJson from '../package.json';
// import { create } from 'Store';
// import { history } from 'Store/Middleware';
// import Indicator from 'Component/WebSocket/Room/Status/Indicator';
// import DebugButton from 'Component/Button/DebugButton';

// declare const module: { hot: { accept: () => void } };

// if (module.hot) {
//   module.hot.accept();
// }

// render(<App
//   store={create(epic, reducer(history))}
//   title='core'
//   translations={Translations}
//   packageJSON={packageJson}>
//   <Header.AppToolbar
//     left={<Header.BackendIndicator />}
//     right={
//       <>
//         <Indicator client={{
//           Host: 'https://api-test.juwelo.de',
//           Path: '/staging/websocket2.services',
//           PrivateNamespace: 'Jsc2Jfs',
//           AutoRoomSubscriptions: ['currentGame', 'plannedGames']
//         }} roomName={'currentGame'} />
//         <Settings.Button />
//         <Notification.Button.Show />
//         <DebugButton />
//       </>
//     }
//   />
//   <Routes />
//   <Overlay>
//     <Navigation />
//     <Login.Dialog />
//     <Logout.Dialog />
//     <Settings.Dialog>
//       <Language.Settings />
//     </Settings.Dialog>
//     <Snackbar />
//   </Overlay>
// </App>, document.getElementById('root'));


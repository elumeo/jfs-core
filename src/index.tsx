// import React from 'react';
// import ReactDOM from 'react-dom';
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

// ReactDOM.render(
//   <App
//     store={create(epic, reducer(history))}
//     title='core'
//     translations={Translations}
//     packageJSON={packageJson}>
//     <Header.AppToolbar
//       left={<Header.BackendIndicator />}
//       right={
//         <>
//           <Settings.Button />
//           <Notification.Button.Show />
//         </>
//       }
//     />
//     <Routes />
//     <Overlay>
//       <Navigation />
//       <Login.Dialog />
//       <Logout.Dialog />
//       <Settings.Dialog>
//         <Language.Settings />
//       </Settings.Dialog>
//       <Snackbar />
//     </Overlay>
//   </App>,
//   document.getElementById('root'),
// );

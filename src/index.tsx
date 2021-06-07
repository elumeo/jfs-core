// import React, { ChangeEventHandler } from 'react';
// import ReactDOM from 'react-dom';
// import * as App from 'Component/App';
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
// import { Translations, Navigation, Routes } from 'Setup';
// import packageJson from '../package.json';
// import {create} from 'Store/index';

// ReactDOM.render(
//   <App.Container
//     store={create(epic, reducer)}
//     title='core'
//     translations={Translations}
//     packageJson={packageJson}>
//     <Overlay>
//       <Header.Toolbar
//         left={<Header.BackendIndicator/>}
//         right={
//           <>
//             <Settings.Button/>
//             <Notification.Button.Show/>
//           </>
//         }/>
//       <Navigation/>
//       <Login.Dialog/>
//       <Logout.Dialog/>
//       <Settings.Dialog>
//         <Language.Settings/>
//       </Settings.Dialog>
//       <Snackbar/>
//     </Overlay>
//     <Routes/>
//   </App.Container>,
//   document.getElementById('root')
// );
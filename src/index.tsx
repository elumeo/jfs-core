import App from 'Component/App/App';
import React from 'react';
import translations from './Setup/Translations.json'
import rootReducer from './Store/Reducer/Global'
import rootEpic from './Store/Epic/index'
import packageJson from '../package.json'
import ReactDOM from 'react-dom'
import Store from 'Store';
import LoginDialog from 'Component/Login/LoginDialog'
import LogoutDialog from 'Component/Logout/LogoutDialog';
import Routes from 'Setup/Routes';
import Header from 'Setup/Header';
import './Style/main.scss'
import NavigationDrawer from 'Setup/Drawer';
import Settings from 'Setup/Settings';

const store = Store(rootEpic,rootReducer);

ReactDOM.render(
  <App
    store={store}
    translations={translations}
    packageJson={packageJson}>
    <Header/>
    <Routes/>
    <LoginDialog/>
    <NavigationDrawer/>
    <Settings/>
    <LogoutDialog/>
    {/* <Snackbar/> */}
  </App>,
  document.getElementById('root')
)

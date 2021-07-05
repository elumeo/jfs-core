import React from 'react';
import ReactDOM from 'react-dom';
import * as App from '../Component/App';
import * as Login from '../Component/Login';
import * as Logout from '../Component/Logout';
import * as Settings from '../Component/Settings';
import * as Language from '../Component/Language';
import * as Header from '../Component/Header';
import reducer from './Store/Reducer/Global';
import epic from './Store/Epic';
import * as Notification from '../Component/Notification';
import Snackbar from '../Component/Snackbar';
import Overlay from '../Component/Overlay';
import { Translations, Navigation, Routes } from '../Setup';
import packageJson from '../package.json';
import { create } from '../Store';
import { history } from '../Store/Middleware';
ReactDOM.render(React.createElement(App.Container, { store: create(epic, reducer(history)), title: 'core', translations: Translations, packageJson: packageJson },
    React.createElement(Header.Toolbar, { left: React.createElement(Header.BackendIndicator, null), right: React.createElement(React.Fragment, null,
            React.createElement(Settings.Button, null),
            React.createElement(Notification.Button.Show, null)) }),
    React.createElement(Login.Dialog, null),
    React.createElement(Logout.Dialog, null),
    React.createElement(Settings.Dialog, null,
        React.createElement(Language.Settings, null)),
    React.createElement(Snackbar, null),
    React.createElement(Routes, null),
    React.createElement(Navigation, null),
    React.createElement(Overlay, null)), document.getElementById('root'));

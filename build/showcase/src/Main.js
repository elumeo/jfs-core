import 'Core/Setup';
import 'jfc-hello-world/build';
if (module.hot) {
    module.hot.accept();
}
import React from 'react';
import { render } from 'react-dom';
import App from '@elumeo/jfs-core/build/Component/App/App';
import LoginDialog from '@elumeo/jfs-core/build/Component/Login/LoginDialog';
import LogoutDialog from '@elumeo/jfs-core/build/Component/Logout/LogoutDialog';
import Snackbar from '@elumeo/jfs-core/build/Component/Snackbar/Snackbar';
import NotificationDrawer from '@elumeo/jfs-core/build/Component/Notification/NotificationDrawer';
import OnScreenNotifications from '@elumeo/jfs-core/build/Component/Notification/OnScreenNotifications';
import packageJson from '../package.json';
import Store from '../../Store';
import Header from '../../Setup/Header';
import NavigationDrawer from '../../Setup/Navigation';
import SettingsDialog from '../../Setup/Settings';
import Content from '../../Setup/Content';
import Translations from '../../Setup/Translations.json';
render(React.createElement(App, { store: Store, translations: Translations, packageJson: packageJson },
    React.createElement(Content, null),
    React.createElement(Header, null),
    React.createElement(LoginDialog, null),
    React.createElement(NavigationDrawer, null),
    React.createElement(SettingsDialog, null),
    React.createElement(LogoutDialog, null),
    React.createElement(NotificationDrawer, null),
    React.createElement(OnScreenNotifications, null),
    React.createElement(Snackbar, null)), document.getElementById('root'));
//# sourceMappingURL=Main.js.map
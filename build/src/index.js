import App from '../Component/App/App';
import React from 'react';
import translations from './Setup/Translations.json';
import rootReducer from './Store/Reducer/Global';
import rootEpic from './Store/Epic/index';
import packageJson from '../package.json';
import ReactDOM from 'react-dom';
import Store from '../Store';
import LoginDialog from '../Component/Login/LoginDialog';
import LogoutDialog from '../Component/Logout/LogoutDialog';
import Routes from '../Setup/Routes';
import Header from '../Setup/Header';
import './Style/main.scss';
import NavigationDrawer from '../Setup/Drawer';
import Settings from '../Setup/Settings';
import NotificationDrawer from '../Component/Notification/NotificationDrawer';
import OnScreenNotifications from '../Component/Notification/OnScreenNotifications';
const store = Store(rootEpic, rootReducer);
const Index = () => {
    console.log('HALLO aspdioja');
    return (React.createElement(React.Fragment, null,
        React.createElement(App, { store: store, translations: translations, packageJson: packageJson },
            React.createElement(Header, null),
            React.createElement(Routes, null),
            React.createElement(LoginDialog, null),
            React.createElement(NavigationDrawer, null),
            React.createElement(Settings, null),
            React.createElement(LogoutDialog, null),
            React.createElement(NotificationDrawer, null),
            React.createElement(OnScreenNotifications, null))));
};
export default Index;
ReactDOM.render(React.createElement(Index, null), document.getElementById('root'));
//# sourceMappingURL=index.js.map
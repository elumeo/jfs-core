import * as React from 'react';
import { uniqueId } from 'lodash';
import Divider from '@material-ui/core/Divider';
import NavigationDrawer from '../Component/Navigation/NavigationDrawer';
import NavigationItem from '../Component/Navigation/NavigationItem';
import SettingsNavigationItem from '../Component/Settings/SettingsNavigationItem';
import LogoutNavigationItem from '../Component/Logout/LogoutNavigationItem';
const Drawer = () => {
    return React.createElement(NavigationDrawer, { position: 'left' },
        React.createElement(NavigationItem, { iconName: 'account_box', messageId: 'app.login', unauthorizedOnly: true, onClickRoute: '/start' }),
        React.createElement(NavigationItem, { iconName: 'home', messageId: 'app.title', onClickRoute: '/start', authorizedOnly: true }),
        React.createElement(Divider, { key: uniqueId('navItem_') }),
        React.createElement(SettingsNavigationItem, null),
        React.createElement(Divider, { key: uniqueId('navItem_') }),
        React.createElement(LogoutNavigationItem, null));
};
export default Drawer;
//# sourceMappingURL=Drawer.js.map
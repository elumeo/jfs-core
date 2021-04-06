import React from 'react';
import * as MUI from '@material-ui/core';
import * as Navigation from '../Component/Navigation';
import * as Logout from '../Component/Logout';
import * as Settings from '../Component/Settings';
const Drawer = () => (React.createElement(Navigation.Drawer, null,
    React.createElement(Navigation.Item, { iconName: 'account_box', messageId: 'app.login', unauthorizedOnly: true, onClickRoute: '/start' }),
    React.createElement(Navigation.Item, { iconName: 'home', messageId: 'app.title', onClickRoute: '/start', authorizedOnly: true }),
    React.createElement(MUI.Divider, null),
    React.createElement(Settings.NavigationItem, null),
    React.createElement(MUI.Divider, null),
    React.createElement(Logout.NavigationItem, null)));
export default Drawer;
//# sourceMappingURL=Navigation.js.map
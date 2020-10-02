import * as React from 'react';
import * as _ from 'lodash';
import Divider from 'react-md/lib/Dividers';
import NavigationDrawer from '@elumeo/jfs-core/build/Component/Navigation/NavigationDrawer';
import NavigationItem from '@elumeo/jfs-core/build/Component/Navigation/NavigationItem';
import SettingsNavigationItem from '@elumeo/jfs-core/build/Component/Settings/SettingsNavigationItem';
import LogoutNavigationItem from '@elumeo/jfs-core/build/Component/Logout/LogoutNavigationItem';
import VersionNavigationItem from '@elumeo/jfs-core/build/Component/Misc/VersionNavigationItem';
export default () => (React.createElement(NavigationDrawer, { position: 'left' },
    React.createElement(NavigationItem, { iconName: 'account_box', messageId: 'app.login', unauthorizedOnly: true, onClickRoute: '/start' }),
    React.createElement(NavigationItem, { iconName: 'home', messageId: 'app.title', onClickRoute: '/start', authorizedOnly: true }),
    React.createElement(Divider, { key: _.uniqueId('navItem_') }),
    React.createElement(SettingsNavigationItem, null),
    React.createElement(Divider, { key: _.uniqueId('navItem_') }),
    React.createElement(LogoutNavigationItem, null),
    React.createElement(VersionNavigationItem, null)));
//# sourceMappingURL=Navigation.js.map
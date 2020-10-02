import * as React from 'react';
import AppHeader from '@elumeo/jfs-core/build/Component/Header/AppHeader';
import BackendIndicator from '@elumeo/jfs-core/build/Component/Header/BackendIndicator';
import SettingsButton from '@elumeo/jfs-core/build/Component/Settings/SettingsButton';
import WebSocketStatus from '@elumeo/jfs-core/build/Component/Websocket/WebSocketStatus';
import NotificationBadge from '@elumeo/jfs-core/build/Component/Notification/NotificationBadge';
import Search from '../../../Component/Search';
export default () => (React.createElement(AppHeader, { leftTools: () => (React.createElement(React.Fragment, null,
        React.createElement(BackendIndicator, null))), rightTools: () => (React.createElement(React.Fragment, null,
        React.createElement(WebSocketStatus, null),
        React.createElement(Search, { className: 'tool' }),
        React.createElement(SettingsButton, null),
        React.createElement(NotificationBadge, null))) }));
//# sourceMappingURL=Header.js.map
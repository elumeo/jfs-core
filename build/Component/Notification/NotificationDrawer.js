import React from 'react';
import { useSelector } from '../../Types/Redux';
import useActions from '../../Store/Action/useActions';
import NotificationsFragment from './NotificationsFragment';
import NotificationDrawerToolbar from './NotificationDrawerToolbar/index';
import useClassNames from './useNotificationDrawerClassNames';
import * as MUI from '@material-ui/core';
import './NotificationDrawer.scss';
export const NavigationDrawerStyles = {
    drawer: {
        maxWidth: '300px'
    },
    header: {
        height: '64px'
    },
    container: {
        maxWidth: '300px',
        overflow: 'auto scroll',
        maxHeight: `calc(100% - 64px)`
    }
};
const NotificationDrawer = () => {
    const { pinnedClassName, overlayClassName } = useClassNames();
    const notificationDrawerVisible = useSelector(state => (state.Core.Notification.notificationDrawerVisible));
    const notificationDrawerPinned = useSelector(state => (state.Core.Notification.notificationDrawerPinned));
    const { toggleNotificationDrawerAction, hideNotificationDrawerAction } = useActions();
    return (React.createElement(MUI.Drawer, { className: `notification-drawer ${pinnedClassName}`, open: notificationDrawerVisible, onClose: toggleNotificationDrawerAction, anchor: 'right', variant: notificationDrawerPinned ? 'persistent' : 'temporary', 
        // header={<NotificationDrawerToolbar/>}
        onKeyDown: (e) => (e.keyCode == 13 && hideNotificationDrawerAction()), style: NavigationDrawerStyles.drawer },
        React.createElement(MUI.Card, { elevation: 0 },
            React.createElement(NotificationDrawerToolbar, null),
            React.createElement(MUI.List, { style: NavigationDrawerStyles.container },
                React.createElement(NotificationsFragment, null)))));
};
export default NotificationDrawer;
//# sourceMappingURL=NotificationDrawer.js.map
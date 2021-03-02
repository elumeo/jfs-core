import React from 'react';
import Drawer from '@material-ui/core/Drawer';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './NotificationDrawer.scss';
import { useSelector } from '../../Types/Redux';
import useActions from '../../Store/Action/useActions';
import NotificationsFragment from './NotificationsFragment';
import NotificationDrawerToolbar from './NotificationDrawerToolbar/index';
import useClassNames from './useNotificationDrawerClassNames';
import { CardContent } from '@material-ui/core';
const NotificationDrawer = () => {
    const { pinnedClassName, overlayClassName } = useClassNames();
    const notificationDrawerVisible = useSelector(state => (state.Core.Notification.notificationDrawerVisible));
    const { toggleNotificationDrawerAction, hideNotificationDrawerAction } = useActions();
    return (React.createElement(Drawer, { className: `notification-drawer ${pinnedClassName}`, open: notificationDrawerVisible, onClose: toggleNotificationDrawerAction, anchor: 'right', 
        // header={<NotificationDrawerToolbar/>}
        onKeyDown: (e) => (e.keyCode == 13 && hideNotificationDrawerAction()) },
        React.createElement(NotificationDrawerToolbar, null),
        React.createElement(CardContent, { className: 'notification-drawer__content' },
            React.createElement(NotificationsFragment, null))));
};
export default NotificationDrawer;
//# sourceMappingURL=NotificationDrawer.js.map
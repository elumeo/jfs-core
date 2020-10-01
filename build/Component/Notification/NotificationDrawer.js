import React from 'react';
import Drawer from 'react-md/lib/Drawers';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './NotificationDrawer.scss';
import { useSelector } from '../../Types/Redux';
import useActions from '../../Store/Action/useActions';
import NotificationsFragment from './NotificationsFragment';
import NotificationDrawerToolbar from './NotificationDrawerToolbar';
import useClassNames from './useNotificationDrawerClassNames';
const NotificationDrawer = () => {
    const { pinnedClassName, overlayClassName } = useClassNames();
    const notificationDrawerVisible = useSelector(state => (state.Core.Notification.notificationDrawerVisible));
    const { toggleNotificationDrawerAction, hideNotificationDrawerAction } = useActions();
    return (React.createElement(Drawer, { className: `notification-drawer ${pinnedClassName}`, visible: notificationDrawerVisible, onVisibilityChange: toggleNotificationDrawerAction, position: 'right', header: React.createElement(NotificationDrawerToolbar, null), onKeyDown: (e) => (e.keyCode == 13 && hideNotificationDrawerAction()), type: Drawer.DrawerTypes.TEMPORARY, overlayClassName: overlayClassName, clickableDesktopOverlay: true, overlay: true },
        React.createElement(ReactCSSTransitionGroup, { transitionName: {
                enter: 'fadein-enter',
                leave: 'disappear-leave',
            }, transitionEnterTimeout: 300, transitionLeaveTimeout: 200 },
            React.createElement(NotificationsFragment, null))));
};
export default NotificationDrawer;
//# sourceMappingURL=NotificationDrawer.js.map
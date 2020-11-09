import * as React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { useSelector } from 'Types/Redux';
import NotificationCard from './NotificationCard';
import './OnScreenNotifications.scss';
const OnScreenNotifications = () => {
    const { notifications, dismissAnimationClassName } = useSelector(state => ({
        notifications: state.Core.Notification.notifications,
        dismissAnimationClassName: state.Core.Notification.dismissAnimationClassName
    }));
    return (React.createElement(ReactCSSTransitionGroup, { transitionName: {
            enter: 'fadein-enter',
            enterActive: 'fadein-enter-active',
            leave: `${dismissAnimationClassName}-leave`,
            leaveActive: `${dismissAnimationClassName}-leave-active`,
        }, transitionEnterTimeout: 300, transitionLeaveTimeout: 200, className: 'notification-fadein' }, notifications
        .filter(notification => notification.onScreen)
        .map(notification => (React.createElement(NotificationCard, { config: notification, key: notification.id })))));
};
export default OnScreenNotifications;
//# sourceMappingURL=OnScreenNotifications.js.map
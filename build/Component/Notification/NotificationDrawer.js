import * as React from 'react';
import NotificationCard from './NotificationCard';
import Drawer from 'react-md/lib/Drawers';
import { connect } from 'react-redux';
import NoNotifications from './NoNotifications';
import Toolbar from 'react-md/lib/Toolbars';
import './NotificationDrawer.scss';
import SplitViewButton from './SplitViewButton';
import DismissAllNotificationsButton from './DismissAllNotificationsButton';
import { hideNotificationDrawerAction, toggleNotificationDrawerAction } from '../../Store/Action/NotificationAction';
import { Button } from 'react-md';
const ReactCSSTransitionGroup = require('react-addons-css-transition-group');
class NotificationDrawer extends React.Component {
    constructor() {
        super(...arguments);
        this.closeOnESC = (e) => {
            if (e.keyCode == 13) {
                this.props.hideNotificationDrawerAction();
            }
        };
    }
    render() {
        const { notifications, notificationDrawerPinned, notificationDrawerVisible } = this.props;
        const empty = !notifications.length;
        let content;
        if (empty) {
            content = [React.createElement(NoNotifications, { key: 'no-notifications' })];
        }
        else {
            content = notifications.map(n => React.createElement(NotificationCard, { config: Object.assign(Object.assign({}, n), { hideButtonVisible: false }), key: n.id }));
        }
        const header = React.createElement(Toolbar, { nav: React.createElement(Button, { icon: true, onClick: () => this.props.hideNotificationDrawerAction() }, "arrow_forward"), actions: [React.createElement(SplitViewButton, null), React.createElement(DismissAllNotificationsButton, null)], className: 'md-divider-border md-divider-border--bottom' });
        const pinnedClassName = notificationDrawerPinned ? 'notification-drawer--pinned' : '';
        const overlayClassName = notificationDrawerPinned ? 'md-overlay--hidden' : '';
        return (React.createElement(Drawer, { className: `notification-drawer ${pinnedClassName}`, visible: notificationDrawerVisible, onVisibilityChange: this.props.toggleNotificationDrawerAction, position: 'right', header: header, onKeyDown: this.closeOnESC, type: Drawer.DrawerTypes.TEMPORARY, overlayClassName: overlayClassName, clickableDesktopOverlay: true, overlay: true },
            React.createElement(ReactCSSTransitionGroup, { transitionName: {
                    enter: 'fadein-enter',
                    leave: 'disappear-leave',
                }, transitionEnterTimeout: 300, transitionLeaveTimeout: 200 }, content)));
    }
}
export default connect((store, ownProps) => (Object.assign(Object.assign({}, ownProps), { notificationDrawerVisible: store.Core.Notification.notificationDrawerVisible, notifications: store.Core.Notification.notifications, notificationDrawerPinned: store.Core.Notification.notificationDrawerPinned })), {
    toggleNotificationDrawerAction,
    hideNotificationDrawerAction
})(NotificationDrawer);
//# sourceMappingURL=NotificationDrawer.js.map
import React from 'react';
import { connect } from 'react-redux';
import { Badge, Button } from 'react-md';
import './NotificationBadge.scss';
import { toggleNotificationDrawerAction } from '../../Store/Action/NotificationAction';
const NotificationBadge = ({ notifications, toggleNotificationDrawerAction: _toggleNotificationDrawerAction }) => {
    const empty = !notifications.length;
    return (React.createElement(Badge, { primary: true, circular: true, "aria-haspopup": true, badgeId: 'notification-badge', badgeContent: empty ? '' : notifications.length, className: empty ? 'md-badge-container--empty' : '' },
        React.createElement(Button, { icon: true, onClick: () => _toggleNotificationDrawerAction(), "aria-describedby": 'notification-badge' }, "notifications")));
};
const mapStateToProps = (state, ownProps) => (Object.assign(Object.assign({}, state.Core.Notification), ownProps));
export default connect(mapStateToProps, {
    toggleNotificationDrawerAction
})(NotificationBadge);
//# sourceMappingURL=NotificationBadge.js.map
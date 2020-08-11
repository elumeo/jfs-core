import * as React from 'react';
import { connect } from 'react-redux';
import NotificationCard from './NotificationCard';
import './OnScreenNotifications.scss';
const ReactCSSTransitionGroup = require('react-addons-css-transition-group');
class OnScreenNotifications extends React.Component {
    render() {
        const { notifications, dismissAnimationClassName } = this.props;
        return (React.createElement(ReactCSSTransitionGroup, { transitionName: {
                enter: 'fadein-enter',
                enterActive: 'fadein-enter-active',
                leave: `${dismissAnimationClassName}-leave`,
                leaveActive: `${dismissAnimationClassName}-leave-active`,
            }, transitionEnterTimeout: 300, transitionLeaveTimeout: 200, className: 'notification-fadein' }, notifications
            .filter(n => n.onScreen)
            .map(n => React.createElement(NotificationCard, { config: n, key: n.id }))));
    }
}
// noinspection JSUnusedGlobalSymbols
export default connect((store, ownProps) => (Object.assign(Object.assign({}, ownProps), { notifications: store.Core.Notification.notifications, dismissAnimationClassName: store.Core.Notification.dismissAnimationClassName })))(OnScreenNotifications);
//# sourceMappingURL=OnScreenNotifications.js.map
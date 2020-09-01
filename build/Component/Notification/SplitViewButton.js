import * as React from 'react';
import { Button } from 'react-md';
import { connect } from 'react-redux';
import { pinNotificationDrawerAction, unpinNotificationDrawerAction } from '../../Store/Action/NotificationAction';
const SplitViewButton = ({ notificationDrawerPinned, pinNotificationDrawerAction, unpinNotificationDrawerAction }) => (React.createElement(Button, { icon: true, primary: notificationDrawerPinned, className: 'split-view-button', onClick: () => (notificationDrawerPinned
        ? unpinNotificationDrawerAction()
        : pinNotificationDrawerAction()) }, "vertical_split"));
const mapStateToProps = (store, ownProps) => (Object.assign(Object.assign({}, store.Core.Notification), ownProps));
const enhance = connect(mapStateToProps, {
    pinNotificationDrawerAction,
    unpinNotificationDrawerAction
});
export default enhance(SplitViewButton);
//# sourceMappingURL=SplitViewButton.js.map
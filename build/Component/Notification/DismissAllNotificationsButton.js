import React from 'react';
import { Button } from 'react-md';
import { connect } from 'react-redux';
import { dismissAllNotificationsAction } from '../../Store/Action/NotificationAction';
const DismissAllNotificationsButton = ({ dismissAllNotificationsAction, notifications }) => (React.createElement(Button, { icon: true, onClick: () => dismissAllNotificationsAction(), disabled: !notifications.length }, "delete"));
const mapStateToProps = (state, ownProps) => (Object.assign(Object.assign({}, state.Core.Notification), ownProps));
const enhance = connect(mapStateToProps, { dismissAllNotificationsAction });
export default enhance(DismissAllNotificationsButton);
//# sourceMappingURL=DismissAllNotificationsButton.js.map
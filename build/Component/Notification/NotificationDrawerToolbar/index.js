import React from 'react';
import SplitViewButton from './SplitViewButton';
import DismissAllNotificationsButton from './DismissAllNotificationsButton';
import HideNotificationDrawerButton from './HideNotificationDrawerButton';
import { CardActions } from '@material-ui/core';
const NotificationDrawerToolbar = () => (
// <CardHeader 
//   title={
React.createElement(React.Fragment, null,
    React.createElement(CardActions, null,
        React.createElement(HideNotificationDrawerButton, null),
        React.createElement(SplitViewButton, null),
        React.createElement(DismissAllNotificationsButton, null)))
//   } 
// />
);
export default NotificationDrawerToolbar;
//# sourceMappingURL=index.js.map
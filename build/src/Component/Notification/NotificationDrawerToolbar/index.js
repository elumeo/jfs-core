import React from 'react';
import Toolbar from 'react-md/lib/Toolbars';
import SplitViewButton from './SplitViewButton';
import DismissAllNotificationsButton from './DismissAllNotificationsButton';
import HideNotificationDrawerButton from './HideNotificationDrawerButton';
const NotificationDrawerToolbar = () => (React.createElement(Toolbar, { nav: React.createElement(HideNotificationDrawerButton, null), actions: [React.createElement(SplitViewButton, null), React.createElement(DismissAllNotificationsButton, null)], className: 'md-divider-border md-divider-border--bottom' }));
export default NotificationDrawerToolbar;
//# sourceMappingURL=index.js.map
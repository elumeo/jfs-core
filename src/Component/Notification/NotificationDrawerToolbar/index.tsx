import React from 'react';
import Toolbar from 'react-md/lib/Toolbars';
import SplitViewButton from './SplitViewButton';
import DismissAllNotificationsButton from './DismissAllNotificationsButton';
import HideNotificationDrawerButton from './HideNotificationDrawerButton';

const NotificationDrawerToolbar: React.FC = () => (
  <Toolbar
    nav={<HideNotificationDrawerButton/>}
    actions={[<SplitViewButton/>, <DismissAllNotificationsButton/>]}
    className='md-divider-border md-divider-border--bottom'/>
);

export default NotificationDrawerToolbar;

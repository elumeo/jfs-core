import React from 'react';
import SplitViewButton from './SplitViewButton';
import DismissAllNotificationsButton from './DismissAllNotificationsButton';
import HideNotificationDrawerButton from './HideNotificationDrawerButton';
import { CardActions, CardHeader } from '@material-ui/core';

const NotificationDrawerToolbar: React.FC = () =>  (
  // <CardHeader 
  //   title={
      <>
        <CardActions>
        <HideNotificationDrawerButton />
          <SplitViewButton /> 
          <DismissAllNotificationsButton />
        </CardActions>
      </>
  //   } 
  // />
)

export default NotificationDrawerToolbar;

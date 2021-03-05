import React from 'react';
import { useSelector } from 'Types/Redux';
import useActions from 'Action/useActions';
import NotificationsFragment from './NotificationsFragment';
import NotificationDrawerToolbar from './NotificationDrawerToolbar/index';
import useClassNames from './useNotificationDrawerClassNames';
import * as MUI from '@material-ui/core';
import './NotificationDrawer.scss';

 

export const NavigationDrawerStyles = {
  drawer : {
    maxWidth:  '300px'
  },
  header:{
    height: '64px'
  },
  container: {
    maxWidth:  '300px',
    overflow: 'auto scroll',
    maxHeight: `calc(100% - 64px)` 
  }
}
const NotificationDrawer: React.FC = () => {
  const { pinnedClassName, overlayClassName } = useClassNames();
  const notificationDrawerVisible = useSelector<boolean>(state => (
    state.Core.Notification.notificationDrawerVisible
  ));
  
  const notificationDrawerPinned = useSelector<boolean>(state => (
    state.Core.Notification.notificationDrawerPinned
  ));
  const {
    toggleNotificationDrawerAction,
    hideNotificationDrawerAction
  } = useActions();

  return (
    <MUI.Drawer
      className={`notification-drawer ${pinnedClassName}`}
      open={notificationDrawerVisible}
      onClose={toggleNotificationDrawerAction}
      anchor='right'
      variant={notificationDrawerPinned ? 'persistent' : 'temporary'}
      // header={<NotificationDrawerToolbar/>}
      onKeyDown={(e: React.KeyboardEvent) => (
        e.keyCode == 13 && hideNotificationDrawerAction()
      )}
      style={NavigationDrawerStyles.drawer} 
      // type={Drawer.DrawerTypes.TEMPORARY}
      // overlayClassName={overlayClassName}
      // clickableDesktopOverlay
      // overlay
      >
        <MUI.Card elevation={0} >
          {/* <MUI.CardHeader title={ */} 
          <NotificationDrawerToolbar/>
          {/*  } /> */}

          
          {/* </MUI.CardHeader> */}

          {/* <MUI.Container  */}
          <MUI.List style={NavigationDrawerStyles.container}>
            <NotificationsFragment/>
          </MUI.List>

        {/* </MUI.Container> */}
      {/* <ReactCSSTransitionGroup
        transitionName={{
          enter: 'fadein-enter',
          leave: 'disappear-leave',
        }}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={200}> */}
      {/* </ReactCSSTransitionGroup> */}
      </MUI.Card>
    </MUI.Drawer>
  );
}

export default NotificationDrawer;

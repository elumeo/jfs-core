import React from 'react';
import Drawer from '@material-ui/core/Drawer';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './NotificationDrawer.scss';
import { useSelector } from 'react-redux';
import useActions from 'Action/useActions';
import NotificationsFragment from './NotificationsFragment';
import NotificationDrawerToolbar from './NotificationDrawerToolbar/index';
import CardHeader from '@material-ui/core/CardHeader'
import useClassNames from './useNotificationDrawerClassNames';
import { CardContent } from '@material-ui/core';
import Global from 'Store/Reducer/Global';

const NotificationDrawer: React.FC = () => {
  const { pinnedClassName, overlayClassName } = useClassNames();
  const notificationDrawerVisible = useSelector<Global.State,boolean>(state => (
    state.Core.Notification.notificationDrawerVisible
  ));
  const {
    toggleNotificationDrawerAction,
    hideNotificationDrawerAction
  } = useActions();

  return (
    <Drawer
      className={`notification-drawer ${pinnedClassName}`}
      open={notificationDrawerVisible}
      onClose={toggleNotificationDrawerAction}
      anchor='right'
      // header={<NotificationDrawerToolbar/>}
      onKeyDown={(e: React.KeyboardEvent) => (
        e.keyCode == 13 && hideNotificationDrawerAction()
      )}
      // type={Drawer.DrawerTypes.TEMPORARY}
      // overlayClassName={overlayClassName}
      // clickableDesktopOverlay
      // overlay
      >
        
        <NotificationDrawerToolbar/>
      
        <CardContent className='notification-drawer__content'>

        <NotificationsFragment/>

        </CardContent>
      {/* <ReactCSSTransitionGroup
        transitionName={{
          enter: 'fadein-enter',
          leave: 'disappear-leave',
        }}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={200}> */}
      {/* </ReactCSSTransitionGroup> */}
    </Drawer>
  );
}

export default NotificationDrawer;

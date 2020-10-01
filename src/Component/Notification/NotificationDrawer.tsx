import React from 'react';
import Drawer from 'react-md/lib/Drawers';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './NotificationDrawer.scss';
import { useSelector } from 'Types/Redux';
import useActions from 'Action/useActions';
import NotificationsFragment from './NotificationsFragment';
import NotificationDrawerToolbar from './NotificationDrawerToolbar';
import useClassNames from './useNotificationDrawerClassNames';

const NotificationDrawer: React.FC = () => {
  const { pinnedClassName, overlayClassName } = useClassNames();
  const notificationDrawerVisible = useSelector<boolean>(state => (
    state.Core.Notification.notificationDrawerVisible
  ));
  const {
    toggleNotificationDrawerAction,
    hideNotificationDrawerAction
  } = useActions();

  return (
    <Drawer
      className={`notification-drawer ${pinnedClassName}`}
      visible={notificationDrawerVisible}
      onVisibilityChange={toggleNotificationDrawerAction}
      position='right'
      header={<NotificationDrawerToolbar/>}
      onKeyDown={(e: React.KeyboardEvent) => (
        e.keyCode == 13 && hideNotificationDrawerAction()
      )}
      type={Drawer.DrawerTypes.TEMPORARY}
      overlayClassName={overlayClassName}
      clickableDesktopOverlay
      overlay>
      <ReactCSSTransitionGroup
        transitionName={{
          enter: 'fadein-enter',
          leave: 'disappear-leave',
        }}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={200}>
        <NotificationsFragment/>
      </ReactCSSTransitionGroup>
    </Drawer>
  );
}

export default NotificationDrawer;

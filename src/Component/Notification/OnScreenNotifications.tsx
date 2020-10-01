import * as React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { INotification } from 'Types/Notification';
import { useSelector } from 'Types/Redux';
import NotificationCard from './NotificationCard';
import './OnScreenNotifications.scss';

const OnScreenNotifications: React.FC = () => {
  const { notifications, dismissAnimationClassName } = useSelector<{
    notifications: INotification[];
    dismissAnimationClassName: string;
  }>(
    state => ({
      notifications: state.Core.Notification.notifications,
      dismissAnimationClassName: state.Core.Notification.dismissAnimationClassName
    })
  );

  return (
    <ReactCSSTransitionGroup
      transitionName={{
        enter: 'fadein-enter',
        enterActive: 'fadein-enter-active',
        leave: `${dismissAnimationClassName}-leave`,
        leaveActive: `${dismissAnimationClassName}-leave-active`,
      }}
      transitionEnterTimeout={300}
      transitionLeaveTimeout={200}
      className={'notification-fadein'}>
      {
        notifications
          .filter(notification => notification.onScreen)
          .map(notification => (
            <NotificationCard
              config={notification}
              key={notification.id}/>
          ))
      }
    </ReactCSSTransitionGroup>
  );
}

export default OnScreenNotifications;

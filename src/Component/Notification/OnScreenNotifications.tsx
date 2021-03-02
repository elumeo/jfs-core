import * as React from 'react';
import { INotification } from 'Types/Notification';
import { useSelector } from 'react-redux';
import NotificationCard from './NotificationCard';
import './OnScreenNotifications.scss';
import Global from 'Store/Reducer/Global';

const OnScreenNotifications: React.FC = () => {
  const { notifications, dismissAnimationClassName } = useSelector<Global.State,{
    notifications: INotification[];
    dismissAnimationClassName: string;
  }>(
    state => ({
      notifications: state.Core.Notification.notifications,
      dismissAnimationClassName: state.Core.Notification.dismissAnimationClassName
    })
  );

  return (<section className='notifications__on-screen'>
     {/* <ReactCSSTransitionGroup */}
    {/* //   transitionName={{
    //     enter: 'fadein-enter',
    //     enterActive: 'fadein-enter-active',
    //     leave: `${dismissAnimationClassName}-leave`,
    //     leaveActive: `${dismissAnimationClassName}-leave-active`,
    //   }}
    //   transitionEnterTimeout={300}
    //   transitionLeaveTimeout={200}
    //   className={'notification-fadein'}
    >
     */}
        {notifications
          .filter(notification => notification.onScreen)
          .map(notification => (
            <NotificationCard
              config={notification}
              key={notification.id}/>
          ))}
{/*       
    /* </ReactCSSTransitionGroup> */ }
   </section>
  );
}

export default OnScreenNotifications;
 
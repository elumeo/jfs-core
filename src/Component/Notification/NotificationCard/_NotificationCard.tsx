import React, { useEffect } from 'react';
import Card from 'react-md/lib/Cards/Card';
import Icon from './Icon';
import Timestamp from './Timestamp';
import Actions from './Actions';
import useClassName from './useClassName';
import getContent from './getContent';
import './NotificationCard.scss';
import { INotification } from 'Types/Notification';
import { INotificationCardProps } from '.';

export type Props = {
  notification: INotification;
  ref: React.Component<INotificationCardProps>;
}

const _NotificationCard: React.FC<Props> = ({ notification, ref }) => {
  const { onMount, onClick } = notification;
  useEffect(
    () => {
      if (typeof onMount == 'function') {
        onMount(notification, ref);
      }
    },
    []
  );
  return (
    <Card
      onClick={() => onClick && onClick(notification, ref)}
      className={useClassName(notification)}>
      <div className='notification-grid'>
        <div className='notification-grid-content'>
          <header className='header'>
            <Icon {...notification}/>
            <Timestamp timestamp={notification.timestamp}/>
          </header>
          {getContent(notification).content}
        </div>
        <Actions ref={ref} notification={notification}/>
      </div>
    </Card>
  );
}

export default _NotificationCard;

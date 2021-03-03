import React, { useEffect } from 'react';
import Card from 'react-md/lib/Cards/Card';
import Icon from './Icon';
import Timestamp from './Timestamp';
import Actions from './Actions';
import useClassName from './useClassName';
import getContent from './getContent';
import { INotification } from 'Types/Notification';
import { INotificationCardProps } from '.';
import { useDispatch } from 'react-redux';

export type Props = {
  notification: INotification;
  topLevelRef: React.Component<INotificationCardProps>;
}

const _NotificationCard: React.FC<Props> = ({
  notification,
  topLevelRef: ref
}) => {
  const { onMount, onClick, onClickDispatch = [] } = notification;
  const dispatch = useDispatch();
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
      onClick={!onClick && !onClickDispatch.length ? undefined : (
        () => {
          if (!!onClick) {
            onClick(notification, ref)
          }
          if (!!onClickDispatch.length) {
            onClickDispatch.forEach(a => dispatch(a))
          }
        }
      )}
      className={useClassName(notification)}>
      <div className='notification-grid'>
        <div className='notification-grid-content'>
          <header className='header'>
            <Icon {...notification}/>
            <Timestamp timestamp={notification.timestamp}/>
          </header>
          {getContent(notification).content}
        </div>
        <Actions topLevelRef={ref} notification={notification}/>
      </div>
    </Card>
  );
}

export default _NotificationCard;

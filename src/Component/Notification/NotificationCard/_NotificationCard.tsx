import React, { useEffect } from 'react';
import Card from '@material-ui/core/Card';
import Icon from './Icon';
import Timestamp from './Timestamp';
import Actions from './Actions';
import useClassName from './useClassName';
import getContent from './getContent';
import { INotification } from 'Types/Notification';
import { INotificationCardProps } from '.';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

export type Props = {
  notification: INotification;
  topLevelRef: React.Component<INotificationCardProps>;
}

const _NotificationCard: React.FC<Props> = ({
  notification,
  topLevelRef: ref
}) => {
  const { onMount, onClick } = notification;
  const {content} = getContent(notification)
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
      className={useClassName(notification)}
      >
        <CardHeader
          avatar={<Icon {...notification}/>} 
          subheader={<Timestamp timestamp={notification.timestamp}/>}
          action={<CardActions>
          <Actions topLevelRef={ref} notification={notification}/>
          </CardActions>}
          />
          <CardContent>
          {content} 

          </CardContent>
          
      {/* <div className='notification-grid'>
        <div className='notification-grid-content'>
          <header className='header'>
            <Icon {...notification}/>
            <Timestamp timestamp={notification.timestamp}/>
          </header>
          {getContent(notification).content}
        </div>
        <Actions topLevelRef={ref} notification={notification}/>
      </div> */}
    </Card>
  );
}

export default _NotificationCard;

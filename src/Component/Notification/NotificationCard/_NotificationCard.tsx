import React, { useEffect } from 'react';
import Icon from './Icon';
import Timestamp from './Timestamp';
import Actions from './Actions';
import useClassName from './useClassName';
import getContent from './getContent';
import { INotification } from 'Types/Notification';
import { INotificationCardProps } from '.';
import * as MUI from '@material-ui/core';
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
    <MUI.Card
      onClick={() => onClick && onClick(notification, ref)}
      className={useClassName(notification)}
      >
        <MUI.CardHeader
          avatar={<Icon {...notification}/>} 
          subheader={<Timestamp timestamp={notification.timestamp}/>}
          action={<Actions topLevelRef={ref} notification={notification}/>}
        />
          <MUI.CardContent>
          {content} 

          </MUI.CardContent>
          
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
    </MUI.Card>
  );
}

export default _NotificationCard;

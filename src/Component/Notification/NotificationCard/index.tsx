import React from 'react';
import { INotification } from 'Types/Notification';
import _NotificationCard from './_NotificationCard';
import './NotificationCard.scss';

export interface INotificationCardProps {
  config: INotification;
}

class NotificationCard extends React.Component<INotificationCardProps> {
  render() {
    return (
      <_NotificationCard notification={this.props.config} ref={this}/>
    );
  }
}

export { default as getContent } from './getContent';
export { default as getPlainText } from './getPlainText';
export { default as timeToRead } from './timeToRead';

export default NotificationCard;

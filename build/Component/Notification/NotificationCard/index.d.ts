import React from 'react';
import { INotification } from '../../../Types/Notification';
import './NotificationCard.scss';
export interface INotificationCardProps {
    config: INotification;
}
declare class NotificationCard extends React.Component<INotificationCardProps> {
    render(): JSX.Element;
}
export { default as getContent } from './getContent';
export { default as getPlainText } from './getPlainText';
export { default as timeToRead } from './timeToRead';
export default NotificationCard;

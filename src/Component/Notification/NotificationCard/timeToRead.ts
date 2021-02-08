import { INotificationContent } from 'Types/Notification';
import getContent from './getContent';

const timeToRead = (notification: INotificationContent): number => (
  getContent(notification).timeToRead
);

export default timeToRead;

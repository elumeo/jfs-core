import { AVERAGE_READING_WORDS_PER_SECOND } from 'Constant/Toast';
import { INotificationContent } from 'Types/Notification';
import getContent from './getContent';
import getPlainText from './getPlainText';
export const _timeToRead = (text: string | String, min: number = 3000): number => {
  const isString = (typeof text === 'string') || (text instanceof String);
  if (!isString) {
    return min;
  }
  const words = text.split(' ').length;
  const calculatedTimeout = words / AVERAGE_READING_WORDS_PER_SECOND * 1000;
  return Math.max(min, calculatedTimeout);
};
const timeToRead = (notification: INotificationContent): number => {
  const  words = getPlainText(notification)  
  const timeToRead = _timeToRead(words)
  return timeToRead
};

export default timeToRead;

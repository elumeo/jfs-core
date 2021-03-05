import { INotificationContent } from '../../../Types/Notification';
declare const getContent: (notification: INotificationContent) => {
    words: string;
    content: any;
    timeToRead: number;
};
export default getContent;

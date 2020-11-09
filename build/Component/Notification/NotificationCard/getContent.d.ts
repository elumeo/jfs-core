/// <reference types="react" />
import { INotificationContent } from "Types/Notification";
declare const getContent: (notification: INotificationContent) => {
    words: string;
    content: JSX.Element;
    timeToRead: number;
};
export default getContent;

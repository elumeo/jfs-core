/// <reference types="react" />
import './NotificationCard.scss';
import { dismissNotificationAction, fadeNotificationOffScreenAction } from '../../Store/Action/NotificationAction';
import { INotification, INotificationContent } from '../../Types/Notification';
export declare const timeToRead: (notification: INotificationContent) => number;
export declare const getPlainText: (notification: INotificationContent) => string;
export declare const getContent: (notification: INotificationContent) => {
    words: string;
    content: JSX.Element;
    timeToRead: number;
};
export interface INotificationCardProps {
    config: INotification;
    dismissNotificationAction?: typeof dismissNotificationAction;
    fadeNotificationOffScreenAction?: typeof fadeNotificationOffScreenAction;
    language?: string;
}
declare const _default: import("react-redux").ComponentClass<INotificationCardProps>;
export default _default;

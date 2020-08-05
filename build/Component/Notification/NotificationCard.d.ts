import React from 'react';
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
declare class NotificationCard extends React.Component<INotificationCardProps> {
    getBadge: () => React.ReactNode;
    getHeader: () => React.ReactNode;
    getContent: () => JSX.Element;
    getIcon: () => JSX.Element;
    getTimestamp: () => JSX.Element;
    getActions: () => React.ReactNode[];
    componentDidMount(): void;
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponent<typeof NotificationCard, Pick<React.ClassAttributes<NotificationCard> & INotificationCardProps, "ref" | "key"> & INotificationCardProps>;
export default _default;

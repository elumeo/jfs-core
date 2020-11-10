import React from 'react';
import { INotification } from '../../../Types/Notification';
import { INotificationCardProps } from '.';
export declare type Props = {
    notification: INotification;
    topLevelRef: React.Component<INotificationCardProps>;
};
declare const _NotificationCard: React.FC<Props>;
export default _NotificationCard;

import React from 'react';
import { INotification } from '../../../../Types/Notification';
import { INotificationCardProps } from '.';
export declare type Props = {
    notification: INotification;
    onClick: (notification: INotification, ref: React.Component<INotificationCardProps>) => void;
    topLevelRef: React.Component<INotificationCardProps>;
};
declare const HideButton: React.FC<Props>;
export default HideButton;

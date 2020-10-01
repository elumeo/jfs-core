import React from 'react';
import { INotification } from '../../../Types/Notification';
import { INotificationCardProps } from '.';
export declare type Props = {
    notification: INotification;
    onClick: (notification: INotification, ref: React.Component<INotificationCardProps>) => void;
    ref: React.Component<INotificationCardProps>;
    iconName: string;
    tooltipLabel: string;
};
declare const CustomActionButton: React.FC<Props>;
export default CustomActionButton;

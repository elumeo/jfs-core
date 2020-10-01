import React from 'react';
import './NotificationCard.scss';
import { INotification } from '../../../Types/Notification';
export declare type Props = {
    timestamp: INotification['timestamp'];
};
declare const Timestamp: React.FC<Props>;
export default Timestamp;

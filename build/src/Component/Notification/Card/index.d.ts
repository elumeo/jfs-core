import React from 'react';
import { Notification } from 'Types/Notification';
export type Props = {
    notification: Notification;
    temporary: boolean;
};
declare const Card: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default Card;

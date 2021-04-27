import React from 'react';
import { default as Default } from './Default';
import Icon from './Icon';
import { Notification } from 'Types/Notification';
export declare type Props = {
    notification: Notification;
    temporary: boolean;
};
declare const Card: React.FC<Props> & {
    Default: typeof Default;
    Icon: typeof Icon;
};
export default Card;

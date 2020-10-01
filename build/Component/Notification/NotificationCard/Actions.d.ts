import React from 'react';
import { INotification } from '../../../Types/Notification';
import { InjectedIntl } from 'react-intl';
import { INotificationCardProps } from '.';
export declare type Props = {
    intl?: InjectedIntl;
    notification: INotification;
    ref: React.Component<INotificationCardProps>;
};
declare const _default: React.FC<Props>;
export default _default;

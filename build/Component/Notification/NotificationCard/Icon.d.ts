import React from 'react';
import { INotification } from '../../../Types/Notification';
export declare type Props = {
    icon?: INotification['icon'];
    error?: INotification['error'];
    isError?: INotification['isError'];
    isWarning?: INotification['isWarning'];
    isSuccess?: INotification['isSuccess'];
};
declare const Icon: React.FC<Props>;
export default Icon;

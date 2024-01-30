import { Epic } from '../../Types/Redux';
import * as Types from '../../Types/Notification';
import { AxiosError } from 'axios';
export declare const mapErrorToNotification: (error: AxiosError<{
    error?: string;
    message?: string;
}, any>) => Types.Notification;
declare const showError: Epic;
export default showError;

import { Epic } from '../../Types/Redux';
import * as Types from '../../Types/Notification';
import { AxiosError } from 'axios';
import { JscError } from '../../Utilities/Format/Error';
export declare const mapErrorToNotification: (error: AxiosError<JscError>) => Types.Notification;
declare const showError: Epic;
export default showError;

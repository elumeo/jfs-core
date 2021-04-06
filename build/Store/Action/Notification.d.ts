import * as TA from 'typesafe-actions';
import * as Type from '../../Types/Notification';
import { AxiosError } from 'axios';
export declare const addNotification: TA.PayloadAC<"notification/ADD", Type.Notification>;
export declare const removeNotification: TA.PayloadAC<"notification/remove", string>;
export declare const removeAllNotifications: TA.EmptyAC<"notification/remove_all">;
export declare const catchErrorNotification: TA.PayloadAC<"notification/ERROR_ADD", AxiosError>;

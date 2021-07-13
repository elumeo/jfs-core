import * as TA from 'typesafe-actions';
import * as Type from '../../Types/Notification';
import { AxiosError } from 'axios';
export declare const addNotification: TA.PayloadAC<"notification/ADD", Type.Notification>;
export declare const removeNotification: TA.PayloadAC<"notification/remove", string>;
export declare const removeAllNotifications: TA.EmptyAC<"notification/remove_all">;
export declare const addErrorNotification: TA.PayloadAC<"notification/ERROR_ADD", AxiosError<any>>;
export declare const setIsNotificationHistoryOpen: TA.PayloadAC<"notification/SET_IS_HISTORY_OPEN", boolean>;

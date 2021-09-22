import * as TA from 'typesafe-actions';
import * as Type from '../../../Types/Notification';
import { AxiosError } from 'axios';
export declare const addNotification: TA.PayloadActionCreator<"notification/ADD", Type.Notification>;
export declare const removeNotification: TA.PayloadActionCreator<"notification/remove", string>;
export declare const removeAllNotifications: TA.EmptyActionCreator<"notification/remove_all">;
export declare const addErrorNotification: TA.PayloadActionCreator<"notification/ERROR_ADD", AxiosError<any>>;
export declare const setIsNotificationHistoryOpen: TA.PayloadActionCreator<"notification/SET_IS_HISTORY_OPEN", boolean>;

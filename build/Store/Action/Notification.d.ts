import * as TA from 'typesafe-actions';
import * as Type from '../../Types/Notification';
export declare const addNotification: TA.PayloadActionCreator<"notification/ADD", Type.Notification>;
export declare const removeNotification: TA.PayloadActionCreator<"notification/REMOVE", string>;
export declare const removeNotificationGroup: TA.PayloadActionCreator<"notification/REMOVE_GROUP", string>;
export declare const removeAllNotifications: TA.EmptyActionCreator<"notification/REMOVE_ALL">;
export declare const addErrorNotification: TA.PayloadActionCreator<"notification/ERROR_ADD", import("axios").AxiosError<unknown, any>>;
export declare const setIsNotificationHistoryOpen: TA.PayloadActionCreator<"notification/SET_IS_HISTORY_OPEN", boolean>;

import { Epic } from '../../Types/Redux';
import { Observable } from 'rxjs';
export declare const wrappedCombineEpics: (...epics: Epic[]) => import("redux-observable").Epic<import("typesafe-actions").PayloadAction<string, import("../Reducer/Core/ToastReducer").IToastConfig> | import("typesafe-actions").EmptyAction<string> | import("typesafe-actions").PayloadAction<string, import("../Action").initializeApp.Payload> | import("typesafe-actions").EmptyAction<"config/LOAD"> | import("typesafe-actions").PayloadAction<string, import("../Action").ConfigLoaded.Payload> | import("typesafe-actions").PayloadAction<string, import("../../Types/Language").Language> | import("typesafe-actions").PayloadAction<string, import("../Action").checkLogin.Payload> | import("typesafe-actions").PayloadAction<string, import("../Action").updateCredentials.Payload> | import("typesafe-actions").PayloadAction<string, import("../Action").logout.Payload> | import("typesafe-actions").PayloadAction<string, import("../../Types/Notification").INotification> | import("typesafe-actions").PayloadAction<string, number> | import("typesafe-actions").PayloadAction<string, string> | import("typesafe-actions").PayloadAction<string, import("../Action").RouteDetails> | import("typesafe-actions").PayloadAction<string, import("../Action").authorizeSession.Payload> | import("typesafe-actions").PayloadAction<string, import("../Action").regionLoaded.Payload> | import("typesafe-actions").PayloadAction<string, import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketError> | import("typesafe-actions").PayloadAction<string, import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketRoomConnection> | import("typesafe-actions").PayloadAction<string, import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketRoom<string>> | import("typesafe-actions").PayloadAction<"locale/SET_LOCALE", import("../Action").setLocale.Payload> | import("typesafe-actions").PayloadAction<string, import("../../Jsc/Api").default.DTO.WebSocket.IWebSocketRoomUpdateDTO<any>> | import("typesafe-actions").PayloadAction<string, import("../../Types/Notification").INotificationContent>, import("typesafe-actions").PayloadAction<string, import("../Reducer/Core/ToastReducer").IToastConfig> | import("typesafe-actions").EmptyAction<string> | import("typesafe-actions").PayloadAction<string, import("../Action").initializeApp.Payload> | import("typesafe-actions").EmptyAction<"config/LOAD"> | import("typesafe-actions").PayloadAction<string, import("../Action").ConfigLoaded.Payload> | import("typesafe-actions").PayloadAction<string, import("../../Types/Language").Language> | import("typesafe-actions").PayloadAction<string, import("../Action").checkLogin.Payload> | import("typesafe-actions").PayloadAction<string, import("../Action").updateCredentials.Payload> | import("typesafe-actions").PayloadAction<string, import("../Action").logout.Payload> | import("typesafe-actions").PayloadAction<string, import("../../Types/Notification").INotification> | import("typesafe-actions").PayloadAction<string, number> | import("typesafe-actions").PayloadAction<string, string> | import("typesafe-actions").PayloadAction<string, import("../Action").RouteDetails> | import("typesafe-actions").PayloadAction<string, import("../Action").authorizeSession.Payload> | import("typesafe-actions").PayloadAction<string, import("../Action").regionLoaded.Payload> | import("typesafe-actions").PayloadAction<string, import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketError> | import("typesafe-actions").PayloadAction<string, import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketRoomConnection> | import("typesafe-actions").PayloadAction<string, import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketRoom<string>> | import("typesafe-actions").PayloadAction<"locale/SET_LOCALE", import("../Action").setLocale.Payload> | import("typesafe-actions").PayloadAction<string, import("../../Jsc/Api").default.DTO.WebSocket.IWebSocketRoomUpdateDTO<any>> | import("typesafe-actions").PayloadAction<string, import("../../Types/Notification").INotificationContent>, import("../Reducer/Global").default.State, {}>;
export declare type Hook = <R>(action: any, store: any) => Observable<R>;
export interface IAppHooks {
    beforeLogoutHook?: Hook;
    afterLogoutHook?: Hook;
}
export declare const defaultHooks: IAppHooks;
export declare const createCombineEpics: (hooks?: IAppHooks) => (...epics: any[]) => import("redux-observable").Epic<import("typesafe-actions").PayloadAction<string, import("../Reducer/Core/ToastReducer").IToastConfig> | import("typesafe-actions").EmptyAction<string> | import("typesafe-actions").PayloadAction<string, import("../Action").initializeApp.Payload> | import("typesafe-actions").EmptyAction<"config/LOAD"> | import("typesafe-actions").PayloadAction<string, import("../Action").ConfigLoaded.Payload> | import("typesafe-actions").PayloadAction<string, import("../../Types/Language").Language> | import("typesafe-actions").PayloadAction<string, import("../Action").checkLogin.Payload> | import("typesafe-actions").PayloadAction<string, import("../Action").updateCredentials.Payload> | import("typesafe-actions").PayloadAction<string, import("../Action").logout.Payload> | import("typesafe-actions").PayloadAction<string, import("../../Types/Notification").INotification> | import("typesafe-actions").PayloadAction<string, number> | import("typesafe-actions").PayloadAction<string, string> | import("typesafe-actions").PayloadAction<string, import("../Action").RouteDetails> | import("typesafe-actions").PayloadAction<string, import("../Action").authorizeSession.Payload> | import("typesafe-actions").PayloadAction<string, import("../Action").regionLoaded.Payload> | import("typesafe-actions").PayloadAction<string, import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketError> | import("typesafe-actions").PayloadAction<string, import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketRoomConnection> | import("typesafe-actions").PayloadAction<string, import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketRoom<string>> | import("typesafe-actions").PayloadAction<"locale/SET_LOCALE", import("../Action").setLocale.Payload> | import("typesafe-actions").PayloadAction<string, import("../../Jsc/Api").default.DTO.WebSocket.IWebSocketRoomUpdateDTO<any>> | import("typesafe-actions").PayloadAction<string, import("../../Types/Notification").INotificationContent>, import("typesafe-actions").PayloadAction<string, import("../Reducer/Core/ToastReducer").IToastConfig> | import("typesafe-actions").EmptyAction<string> | import("typesafe-actions").PayloadAction<string, import("../Action").initializeApp.Payload> | import("typesafe-actions").EmptyAction<"config/LOAD"> | import("typesafe-actions").PayloadAction<string, import("../Action").ConfigLoaded.Payload> | import("typesafe-actions").PayloadAction<string, import("../../Types/Language").Language> | import("typesafe-actions").PayloadAction<string, import("../Action").checkLogin.Payload> | import("typesafe-actions").PayloadAction<string, import("../Action").updateCredentials.Payload> | import("typesafe-actions").PayloadAction<string, import("../Action").logout.Payload> | import("typesafe-actions").PayloadAction<string, import("../../Types/Notification").INotification> | import("typesafe-actions").PayloadAction<string, number> | import("typesafe-actions").PayloadAction<string, string> | import("typesafe-actions").PayloadAction<string, import("../Action").RouteDetails> | import("typesafe-actions").PayloadAction<string, import("../Action").authorizeSession.Payload> | import("typesafe-actions").PayloadAction<string, import("../Action").regionLoaded.Payload> | import("typesafe-actions").PayloadAction<string, import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketError> | import("typesafe-actions").PayloadAction<string, import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketRoomConnection> | import("typesafe-actions").PayloadAction<string, import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketRoom<string>> | import("typesafe-actions").PayloadAction<"locale/SET_LOCALE", import("../Action").setLocale.Payload> | import("typesafe-actions").PayloadAction<string, import("../../Jsc/Api").default.DTO.WebSocket.IWebSocketRoomUpdateDTO<any>> | import("typesafe-actions").PayloadAction<string, import("../../Types/Notification").INotificationContent>, import("../Reducer/Global").default.State, {}>;
declare const _default: (...epics: any[]) => import("redux-observable").Epic<import("typesafe-actions").PayloadAction<string, import("../Reducer/Core/ToastReducer").IToastConfig> | import("typesafe-actions").EmptyAction<string> | import("typesafe-actions").PayloadAction<string, import("../Action").initializeApp.Payload> | import("typesafe-actions").EmptyAction<"config/LOAD"> | import("typesafe-actions").PayloadAction<string, import("../Action").ConfigLoaded.Payload> | import("typesafe-actions").PayloadAction<string, import("../../Types/Language").Language> | import("typesafe-actions").PayloadAction<string, import("../Action").checkLogin.Payload> | import("typesafe-actions").PayloadAction<string, import("../Action").updateCredentials.Payload> | import("typesafe-actions").PayloadAction<string, import("../Action").logout.Payload> | import("typesafe-actions").PayloadAction<string, import("../../Types/Notification").INotification> | import("typesafe-actions").PayloadAction<string, number> | import("typesafe-actions").PayloadAction<string, string> | import("typesafe-actions").PayloadAction<string, import("../Action").RouteDetails> | import("typesafe-actions").PayloadAction<string, import("../Action").authorizeSession.Payload> | import("typesafe-actions").PayloadAction<string, import("../Action").regionLoaded.Payload> | import("typesafe-actions").PayloadAction<string, import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketError> | import("typesafe-actions").PayloadAction<string, import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketRoomConnection> | import("typesafe-actions").PayloadAction<string, import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketRoom<string>> | import("typesafe-actions").PayloadAction<"locale/SET_LOCALE", import("../Action").setLocale.Payload> | import("typesafe-actions").PayloadAction<string, import("../../Jsc/Api").default.DTO.WebSocket.IWebSocketRoomUpdateDTO<any>> | import("typesafe-actions").PayloadAction<string, import("../../Types/Notification").INotificationContent>, import("typesafe-actions").PayloadAction<string, import("../Reducer/Core/ToastReducer").IToastConfig> | import("typesafe-actions").EmptyAction<string> | import("typesafe-actions").PayloadAction<string, import("../Action").initializeApp.Payload> | import("typesafe-actions").EmptyAction<"config/LOAD"> | import("typesafe-actions").PayloadAction<string, import("../Action").ConfigLoaded.Payload> | import("typesafe-actions").PayloadAction<string, import("../../Types/Language").Language> | import("typesafe-actions").PayloadAction<string, import("../Action").checkLogin.Payload> | import("typesafe-actions").PayloadAction<string, import("../Action").updateCredentials.Payload> | import("typesafe-actions").PayloadAction<string, import("../Action").logout.Payload> | import("typesafe-actions").PayloadAction<string, import("../../Types/Notification").INotification> | import("typesafe-actions").PayloadAction<string, number> | import("typesafe-actions").PayloadAction<string, string> | import("typesafe-actions").PayloadAction<string, import("../Action").RouteDetails> | import("typesafe-actions").PayloadAction<string, import("../Action").authorizeSession.Payload> | import("typesafe-actions").PayloadAction<string, import("../Action").regionLoaded.Payload> | import("typesafe-actions").PayloadAction<string, import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketError> | import("typesafe-actions").PayloadAction<string, import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketRoomConnection> | import("typesafe-actions").PayloadAction<string, import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketRoom<string>> | import("typesafe-actions").PayloadAction<"locale/SET_LOCALE", import("../Action").setLocale.Payload> | import("typesafe-actions").PayloadAction<string, import("../../Jsc/Api").default.DTO.WebSocket.IWebSocketRoomUpdateDTO<any>> | import("typesafe-actions").PayloadAction<string, import("../../Types/Notification").INotificationContent>, import("../Reducer/Global").default.State, {}>;
export default _default;

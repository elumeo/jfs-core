import { PayloadAction } from 'typesafe-actions';
import * as Action from '../Action';
import JSCApi from '../../Jsc/Api';
import { logout } from '../Action';
export declare const beforeLogoutHookEpic: (handleLogoutHook: any) => (action$: any, store: any) => any;
export declare const afterLogoutHookEpic: (handleLogoutFinished: any) => (action$: any) => any;
declare const _default: import("redux-observable").Epic<PayloadAction<string, import("../../Types/Language").Language> | import("typesafe-actions").EmptyAction<string> | PayloadAction<string, logout.Payload> | PayloadAction<string, import("../Reducer/Core/ToastReducer").IToastConfig> | PayloadAction<string, number> | PayloadAction<string, Action.checkLogin.Payload> | PayloadAction<string, Action.updateCredentials.Payload> | PayloadAction<string, Action.RouteDetails> | PayloadAction<string, Action.initializeApp.Payload> | import("typesafe-actions").EmptyAction<"config/LOAD"> | PayloadAction<string, Action.ConfigLoaded.Payload> | PayloadAction<string, import("../../Types/Notification").INotificationContent> | PayloadAction<string, import("../../Types/Notification").INotification> | PayloadAction<string, string> | PayloadAction<string, Action.authorizeSession.Payload> | PayloadAction<string, Action.regionLoaded.Payload> | PayloadAction<string, import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketError> | PayloadAction<string, import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketRoom<string>> | PayloadAction<string, import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketRoomConnection> | PayloadAction<string, JSCApi.DTO.WebSocket.IWebSocketRoomUpdateDTO<any>> | PayloadAction<"locale/SET_LOCALE", Action.setLocale.Payload>, PayloadAction<string, import("../../Types/Language").Language> | import("typesafe-actions").EmptyAction<string> | PayloadAction<string, logout.Payload> | PayloadAction<string, import("../Reducer/Core/ToastReducer").IToastConfig> | PayloadAction<string, number> | PayloadAction<string, Action.checkLogin.Payload> | PayloadAction<string, Action.updateCredentials.Payload> | PayloadAction<string, Action.RouteDetails> | PayloadAction<string, Action.initializeApp.Payload> | import("typesafe-actions").EmptyAction<"config/LOAD"> | PayloadAction<string, Action.ConfigLoaded.Payload> | PayloadAction<string, import("../../Types/Notification").INotificationContent> | PayloadAction<string, import("../../Types/Notification").INotification> | PayloadAction<string, string> | PayloadAction<string, Action.authorizeSession.Payload> | PayloadAction<string, Action.regionLoaded.Payload> | PayloadAction<string, import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketError> | PayloadAction<string, import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketRoom<string>> | PayloadAction<string, import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketRoomConnection> | PayloadAction<string, JSCApi.DTO.WebSocket.IWebSocketRoomUpdateDTO<any>> | PayloadAction<"locale/SET_LOCALE", Action.setLocale.Payload>, import("../Reducer/Global").default.State, {}>;
export default _default;

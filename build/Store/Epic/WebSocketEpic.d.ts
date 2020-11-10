import { PayloadAction } from 'typesafe-actions';
import { IWebSocketRoom, IWebSocketRoomConnection } from '../Reducer/Core/WebSocketConnectionReducer';
import { authorizeSession, logout } from '../Action/SessionAction';
import { INotificationContent } from '../../Types/Notification';
import { Epic } from '../../Types/Redux';
export declare const webSocketAppIsInitializedEpic: Epic;
export declare const webSocketConnectRequestEpic: Epic;
export declare const webSocketLogoutEpic: Epic;
export declare const webSocketCheckForConnectionErrorEpic: Epic;
export declare const webSocketCheckForReconnectEpic: Epic;
export declare const webSocketConnectSuccessEpic: Epic;
export declare const webSocketDisconnectRequestEpic: Epic;
export declare const webSocketJoinRoomRequestEpic: Epic;
export declare const webSocketJoinRoomLoadingEpic: Epic;
export declare const webSocketLeaveRoomRequestEpic: Epic;
declare const _default: import("redux-observable").Epic<PayloadAction<string, number> | PayloadAction<string, import("../../Types/Notification").INotification> | PayloadAction<string, string> | import("typesafe-actions").EmptyAction<string> | PayloadAction<string, import("../Action").initializeApp.Payload> | import("typesafe-actions").EmptyAction<"config/LOAD"> | PayloadAction<string, import("../Action").ConfigLoaded.Payload> | PayloadAction<string, import("../../Types/Language").Language> | PayloadAction<string, import("../Action").updateCredentials.Payload> | PayloadAction<string, import("../Action").checkLogin.Payload> | PayloadAction<string, INotificationContent> | PayloadAction<string, import("../Action").RouteDetails> | PayloadAction<string, logout.Payload> | PayloadAction<string, authorizeSession.Payload> | PayloadAction<string, import("../Action").regionLoaded.Payload> | PayloadAction<string, import("../Reducer/Core/ToastReducer").IToastConfig> | PayloadAction<string, import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketError> | PayloadAction<string, IWebSocketRoom<string>> | PayloadAction<string, IWebSocketRoomConnection> | PayloadAction<string, import("../../Jsc/Api").default.DTO.WebSocket.IWebSocketRoomUpdateDTO<any>> | PayloadAction<"locale/SET_LOCALE", import("../Action").setLocale.Payload>, PayloadAction<string, number> | PayloadAction<string, import("../../Types/Notification").INotification> | PayloadAction<string, string> | import("typesafe-actions").EmptyAction<string> | PayloadAction<string, import("../Action").initializeApp.Payload> | import("typesafe-actions").EmptyAction<"config/LOAD"> | PayloadAction<string, import("../Action").ConfigLoaded.Payload> | PayloadAction<string, import("../../Types/Language").Language> | PayloadAction<string, import("../Action").updateCredentials.Payload> | PayloadAction<string, import("../Action").checkLogin.Payload> | PayloadAction<string, INotificationContent> | PayloadAction<string, import("../Action").RouteDetails> | PayloadAction<string, logout.Payload> | PayloadAction<string, authorizeSession.Payload> | PayloadAction<string, import("../Action").regionLoaded.Payload> | PayloadAction<string, import("../Reducer/Core/ToastReducer").IToastConfig> | PayloadAction<string, import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketError> | PayloadAction<string, IWebSocketRoom<string>> | PayloadAction<string, IWebSocketRoomConnection> | PayloadAction<string, import("../../Jsc/Api").default.DTO.WebSocket.IWebSocketRoomUpdateDTO<any>> | PayloadAction<"locale/SET_LOCALE", import("../Action").setLocale.Payload>, import("../Reducer/Global").default.State, {}>;
export default _default;

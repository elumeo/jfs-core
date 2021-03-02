import JSCApi from '../../../API/JSC/Api/index';
import * as Action from '../../../Store/Action';
import Global from '../../../Store/Reducer/Global';
declare const _default: import("redux-observable").Epic<import("typesafe-actions").EmptyAction<string> | import("typesafe-actions").PayloadAction<string, Action.initializeApp.Payload> | import("typesafe-actions").EmptyAction<"config/LOAD"> | import("typesafe-actions").PayloadAction<string, Action.ConfigLoaded.Payload> | import("typesafe-actions").PayloadAction<string, import("../../Types/Language").Language> | import("typesafe-actions").PayloadAction<string, Action.updateCredentials.Payload> | import("typesafe-actions").PayloadAction<string, Action.checkLogin.Payload> | import("typesafe-actions").PayloadAction<string, import("../../Types/Notification").INotificationContent> | import("typesafe-actions").PayloadAction<string, import("../../Types/Notification").INotification> | import("typesafe-actions").PayloadAction<string, number> | import("typesafe-actions").PayloadAction<string, string> | import("typesafe-actions").PayloadAction<string, Action.RouteDetails> | import("typesafe-actions").PayloadAction<string, Action.logout.Payload> | import("typesafe-actions").PayloadAction<string, Action.authorizeSession.Payload> | import("typesafe-actions").PayloadAction<string, Action.regionLoaded.Payload> | import("typesafe-actions").PayloadAction<string, import("../Reducer/Core/ToastReducer").IToastConfig> | import("typesafe-actions").PayloadAction<string, import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketError> | import("typesafe-actions").PayloadAction<string, import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketRoom<string>> | import("typesafe-actions").PayloadAction<string, import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketRoomConnection> | import("typesafe-actions").PayloadAction<string, JSCApi.DTO.WebSocket.IWebSocketRoomUpdateDTO<any>> | import("typesafe-actions").PayloadAction<"locale/SET_LOCALE", Action.setLocale.Payload>, import("typesafe-actions").EmptyAction<string> | import("typesafe-actions").PayloadAction<string, Action.initializeApp.Payload> | import("typesafe-actions").EmptyAction<"config/LOAD"> | import("typesafe-actions").PayloadAction<string, Action.ConfigLoaded.Payload> | import("typesafe-actions").PayloadAction<string, import("../../Types/Language").Language> | import("typesafe-actions").PayloadAction<string, Action.updateCredentials.Payload> | import("typesafe-actions").PayloadAction<string, Action.checkLogin.Payload> | import("typesafe-actions").PayloadAction<string, import("../../Types/Notification").INotificationContent> | import("typesafe-actions").PayloadAction<string, import("../../Types/Notification").INotification> | import("typesafe-actions").PayloadAction<string, number> | import("typesafe-actions").PayloadAction<string, string> | import("typesafe-actions").PayloadAction<string, Action.RouteDetails> | import("typesafe-actions").PayloadAction<string, Action.logout.Payload> | import("typesafe-actions").PayloadAction<string, Action.authorizeSession.Payload> | import("typesafe-actions").PayloadAction<string, Action.regionLoaded.Payload> | import("typesafe-actions").PayloadAction<string, import("../Reducer/Core/ToastReducer").IToastConfig> | import("typesafe-actions").PayloadAction<string, import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketError> | import("typesafe-actions").PayloadAction<string, import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketRoom<string>> | import("typesafe-actions").PayloadAction<string, import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketRoomConnection> | import("typesafe-actions").PayloadAction<string, JSCApi.DTO.WebSocket.IWebSocketRoomUpdateDTO<any>> | import("typesafe-actions").PayloadAction<"locale/SET_LOCALE", Action.setLocale.Payload>, Global.State, {}>;
export default _default;
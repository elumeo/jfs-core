import JSCApi from '../../API/JSC';
import * as Action from '../Action';
declare const _default: import("redux-observable").Epic<import("typesafe-actions").PayloadAction<string, number> | import("typesafe-actions").PayloadAction<"app/INITIALZE", Action.initializeApp.Payload> | import("typesafe-actions").EmptyAction<"app/INITIALZED"> | import("typesafe-actions").EmptyAction<"config/LOAD"> | import("typesafe-actions").PayloadAction<"config/LOADED", Action.ConfigLoaded.Payload> | import("typesafe-actions").EmptyAction<"config/LOAD_FAILED"> | import("typesafe-actions").PayloadAction<"language/CHANGE", import("../../Types/Language").Language> | import("typesafe-actions").EmptyAction<"language/INITIALIZE"> | import("typesafe-actions").EmptyAction<"login/OPEN"> | import("typesafe-actions").EmptyAction<"login/CLOSE"> | import("typesafe-actions").PayloadAction<"login/UPDATE_CREDENTIALS", Action.updateCredentials.Payload> | import("typesafe-actions").PayloadAction<"login/CHECK", Action.checkLogin.Payload> | import("typesafe-actions").EmptyAction<"login/LOGGED_IN"> | import("typesafe-actions").EmptyAction<"login/LOGIN_FAILED"> | import("typesafe-actions").EmptyAction<"logout/OPEN"> | import("typesafe-actions").EmptyAction<"logout/CLOSE"> | import("typesafe-actions").EmptyAction<"logout/BEFORE_LOGOUT_HOOK"> | import("typesafe-actions").EmptyAction<"logout/FINISHED"> | import("typesafe-actions").EmptyAction<"navigation/OPEN"> | import("typesafe-actions").EmptyAction<"navigation/CLOSE"> | import("typesafe-actions").PayloadAction<string, import("../../Types/Notification").INotificationContent> | import("typesafe-actions").PayloadAction<string, import("../../Types/Notification").INotification> | import("typesafe-actions").PayloadAction<string, string> | import("typesafe-actions").EmptyAction<"notification/DELETE_ALL"> | import("typesafe-actions").EmptyAction<"notification/DELETE_NEXT"> | import("typesafe-actions").EmptyAction<"notification/drawer/TOGGLE"> | import("typesafe-actions").EmptyAction<"notification/drawer/SHOW"> | import("typesafe-actions").EmptyAction<"notification/drawer/HIDE"> | import("typesafe-actions").EmptyAction<"notification/drawer/PIN"> | import("typesafe-actions").EmptyAction<"notification/drawer/UNPIN"> | import("typesafe-actions").EmptyAction<"route/ENTER_AUTHORIZED"> | import("typesafe-actions").EmptyAction<"route/ENTER_UNAUTHORIZED"> | import("typesafe-actions").PayloadAction<string, Action.RouteDetails> | import("typesafe-actions").EmptyAction<"session/LOAD"> | import("typesafe-actions").EmptyAction<"route/CHECK"> | import("typesafe-actions").PayloadAction<"route/LOGOUT", Action.logout.Payload> | import("typesafe-actions").PayloadAction<"route/AUTHORIZE", Action.authorizeSession.Payload> | import("typesafe-actions").EmptyAction<"route/UNAUTHORIZE"> | import("typesafe-actions").EmptyAction<"settings/OPEN"> | import("typesafe-actions").EmptyAction<"settings/CLOSE"> | import("typesafe-actions").EmptyAction<"splitView/ENABLE"> | import("typesafe-actions").EmptyAction<"splitView/DISABLE"> | import("typesafe-actions").PayloadAction<"region/LOADED", Action.regionLoaded.Payload> | import("typesafe-actions").EmptyAction<"region/GET_FAILED"> | import("typesafe-actions").PayloadAction<"toast/ADD", import("../Reducer/Core/ToastReducer").IToastConfig> | import("typesafe-actions").EmptyAction<"toast/DELETE"> | import("typesafe-actions").PayloadAction<"websocket/ADD_NAMESPACE", string> | import("typesafe-actions").PayloadAction<"websocket/CONNECT_REQUEST", string> | import("typesafe-actions").PayloadAction<"websocket/CONNECT_SUCCESS", string> | import("typesafe-actions").PayloadAction<"websocket/CONNECT_FAILED", import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketError> | import("typesafe-actions").PayloadAction<"websocket/DISCONNECT_REQUEST", string> | import("typesafe-actions").PayloadAction<"websocket/DISCONNECT_SUCCESS", string> | import("typesafe-actions").PayloadAction<"websocket/JOIN_ROOM_REQUEST", import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketRoom<string>> | import("typesafe-actions").PayloadAction<"websocket/JOIN_ROOM_LOADING", import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketRoomConnection> | import("typesafe-actions").PayloadAction<"websocket/JOIN_ROOM_SUCCESS", import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketRoomConnection> | import("typesafe-actions").PayloadAction<"websocket/JOIN_ROOM_FAILURE", import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketRoomConnection> | import("typesafe-actions").PayloadAction<"websocket/LEAVE_ROOM_REQUEST", import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketRoom<string>> | import("typesafe-actions").PayloadAction<"websocket/LEAVE_ROOM_SUCCESS", import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketRoom<string>> | import("typesafe-actions").PayloadAction<"websocket/UPDATE_ROOM", JSCApi.DTO.WebSocket.IWebSocketRoomUpdateDTO<any>> | import("typesafe-actions").PayloadAction<"locale/SET_LOCALE", Action.setLocale.Payload>, import("typesafe-actions").PayloadAction<string, number> | import("typesafe-actions").PayloadAction<"app/INITIALZE", Action.initializeApp.Payload> | import("typesafe-actions").EmptyAction<"app/INITIALZED"> | import("typesafe-actions").EmptyAction<"config/LOAD"> | import("typesafe-actions").PayloadAction<"config/LOADED", Action.ConfigLoaded.Payload> | import("typesafe-actions").EmptyAction<"config/LOAD_FAILED"> | import("typesafe-actions").PayloadAction<"language/CHANGE", import("../../Types/Language").Language> | import("typesafe-actions").EmptyAction<"language/INITIALIZE"> | import("typesafe-actions").EmptyAction<"login/OPEN"> | import("typesafe-actions").EmptyAction<"login/CLOSE"> | import("typesafe-actions").PayloadAction<"login/UPDATE_CREDENTIALS", Action.updateCredentials.Payload> | import("typesafe-actions").PayloadAction<"login/CHECK", Action.checkLogin.Payload> | import("typesafe-actions").EmptyAction<"login/LOGGED_IN"> | import("typesafe-actions").EmptyAction<"login/LOGIN_FAILED"> | import("typesafe-actions").EmptyAction<"logout/OPEN"> | import("typesafe-actions").EmptyAction<"logout/CLOSE"> | import("typesafe-actions").EmptyAction<"logout/BEFORE_LOGOUT_HOOK"> | import("typesafe-actions").EmptyAction<"logout/FINISHED"> | import("typesafe-actions").EmptyAction<"navigation/OPEN"> | import("typesafe-actions").EmptyAction<"navigation/CLOSE"> | import("typesafe-actions").PayloadAction<string, import("../../Types/Notification").INotificationContent> | import("typesafe-actions").PayloadAction<string, import("../../Types/Notification").INotification> | import("typesafe-actions").PayloadAction<string, string> | import("typesafe-actions").EmptyAction<"notification/DELETE_ALL"> | import("typesafe-actions").EmptyAction<"notification/DELETE_NEXT"> | import("typesafe-actions").EmptyAction<"notification/drawer/TOGGLE"> | import("typesafe-actions").EmptyAction<"notification/drawer/SHOW"> | import("typesafe-actions").EmptyAction<"notification/drawer/HIDE"> | import("typesafe-actions").EmptyAction<"notification/drawer/PIN"> | import("typesafe-actions").EmptyAction<"notification/drawer/UNPIN"> | import("typesafe-actions").EmptyAction<"route/ENTER_AUTHORIZED"> | import("typesafe-actions").EmptyAction<"route/ENTER_UNAUTHORIZED"> | import("typesafe-actions").PayloadAction<string, Action.RouteDetails> | import("typesafe-actions").EmptyAction<"session/LOAD"> | import("typesafe-actions").EmptyAction<"route/CHECK"> | import("typesafe-actions").PayloadAction<"route/LOGOUT", Action.logout.Payload> | import("typesafe-actions").PayloadAction<"route/AUTHORIZE", Action.authorizeSession.Payload> | import("typesafe-actions").EmptyAction<"route/UNAUTHORIZE"> | import("typesafe-actions").EmptyAction<"settings/OPEN"> | import("typesafe-actions").EmptyAction<"settings/CLOSE"> | import("typesafe-actions").EmptyAction<"splitView/ENABLE"> | import("typesafe-actions").EmptyAction<"splitView/DISABLE"> | import("typesafe-actions").PayloadAction<"region/LOADED", Action.regionLoaded.Payload> | import("typesafe-actions").EmptyAction<"region/GET_FAILED"> | import("typesafe-actions").PayloadAction<"toast/ADD", import("../Reducer/Core/ToastReducer").IToastConfig> | import("typesafe-actions").EmptyAction<"toast/DELETE"> | import("typesafe-actions").PayloadAction<"websocket/ADD_NAMESPACE", string> | import("typesafe-actions").PayloadAction<"websocket/CONNECT_REQUEST", string> | import("typesafe-actions").PayloadAction<"websocket/CONNECT_SUCCESS", string> | import("typesafe-actions").PayloadAction<"websocket/CONNECT_FAILED", import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketError> | import("typesafe-actions").PayloadAction<"websocket/DISCONNECT_REQUEST", string> | import("typesafe-actions").PayloadAction<"websocket/DISCONNECT_SUCCESS", string> | import("typesafe-actions").PayloadAction<"websocket/JOIN_ROOM_REQUEST", import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketRoom<string>> | import("typesafe-actions").PayloadAction<"websocket/JOIN_ROOM_LOADING", import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketRoomConnection> | import("typesafe-actions").PayloadAction<"websocket/JOIN_ROOM_SUCCESS", import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketRoomConnection> | import("typesafe-actions").PayloadAction<"websocket/JOIN_ROOM_FAILURE", import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketRoomConnection> | import("typesafe-actions").PayloadAction<"websocket/LEAVE_ROOM_REQUEST", import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketRoom<string>> | import("typesafe-actions").PayloadAction<"websocket/LEAVE_ROOM_SUCCESS", import("../Reducer/Core/WebSocketConnectionReducer").IWebSocketRoom<string>> | import("typesafe-actions").PayloadAction<"websocket/UPDATE_ROOM", JSCApi.DTO.WebSocket.IWebSocketRoomUpdateDTO<any>> | import("typesafe-actions").PayloadAction<"locale/SET_LOCALE", Action.setLocale.Payload>, import("../Reducer/Global").State, {}>;
export default _default;

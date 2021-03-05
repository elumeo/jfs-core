import * as Action from '../../Action';
import * as TA from 'typesafe-actions';
import { INotification } from '../../../Types/Notification';
export declare type State = {
    notifications?: INotification[];
    dismissAnimationClassName?: string;
    notificationDrawerVisible?: boolean;
    notificationDrawerPinned?: boolean;
};
declare const Notification: TA.Reducer<State, TA.PayloadAction<string, number> | TA.PayloadAction<"app/INITIALZE", Action.initializeApp.Payload> | TA.EmptyAction<"app/INITIALZED"> | TA.EmptyAction<"config/LOAD"> | TA.PayloadAction<"config/LOADED", Action.ConfigLoaded.Payload> | TA.EmptyAction<"config/LOAD_FAILED"> | TA.PayloadAction<"language/CHANGE", import("../../../Types/Language").Language> | TA.EmptyAction<"language/INITIALIZE"> | TA.EmptyAction<"login/OPEN"> | TA.EmptyAction<"login/CLOSE"> | TA.PayloadAction<"login/UPDATE_CREDENTIALS", Action.updateCredentials.Payload> | TA.PayloadAction<"login/CHECK", Action.checkLogin.Payload> | TA.EmptyAction<"login/LOGGED_IN"> | TA.EmptyAction<"login/LOGIN_FAILED"> | TA.EmptyAction<"logout/OPEN"> | TA.EmptyAction<"logout/CLOSE"> | TA.EmptyAction<"logout/BEFORE_LOGOUT_HOOK"> | TA.EmptyAction<"logout/FINISHED"> | TA.EmptyAction<"navigation/OPEN"> | TA.EmptyAction<"navigation/CLOSE"> | TA.PayloadAction<string, import("../../../Types/Notification").INotificationContent> | TA.PayloadAction<string, INotification> | TA.PayloadAction<string, string> | TA.EmptyAction<"notification/DELETE_ALL"> | TA.EmptyAction<"notification/DELETE_NEXT"> | TA.EmptyAction<"notification/drawer/TOGGLE"> | TA.EmptyAction<"notification/drawer/SHOW"> | TA.EmptyAction<"notification/drawer/HIDE"> | TA.EmptyAction<"notification/drawer/PIN"> | TA.EmptyAction<"notification/drawer/UNPIN"> | TA.EmptyAction<"route/ENTER_AUTHORIZED"> | TA.EmptyAction<"route/ENTER_UNAUTHORIZED"> | TA.PayloadAction<string, Action.RouteDetails> | TA.EmptyAction<"session/LOAD"> | TA.EmptyAction<"route/CHECK"> | TA.PayloadAction<"route/LOGOUT", Action.logout.Payload> | TA.PayloadAction<"route/AUTHORIZE", Action.authorizeSession.Payload> | TA.EmptyAction<"route/UNAUTHORIZE"> | TA.EmptyAction<"settings/OPEN"> | TA.EmptyAction<"settings/CLOSE"> | TA.EmptyAction<"splitView/ENABLE"> | TA.EmptyAction<"splitView/DISABLE"> | TA.PayloadAction<"region/LOADED", Action.regionLoaded.Payload> | TA.EmptyAction<"region/GET_FAILED"> | TA.PayloadAction<"toast/ADD", import("./ToastReducer").IToastConfig> | TA.EmptyAction<"toast/DELETE"> | TA.PayloadAction<"websocket/ADD_NAMESPACE", string> | TA.PayloadAction<"websocket/CONNECT_REQUEST", string> | TA.PayloadAction<"websocket/CONNECT_SUCCESS", string> | TA.PayloadAction<"websocket/CONNECT_FAILED", import("./WebSocketConnectionReducer").IWebSocketError> | TA.PayloadAction<"websocket/DISCONNECT_REQUEST", string> | TA.PayloadAction<"websocket/DISCONNECT_SUCCESS", string> | TA.PayloadAction<"websocket/JOIN_ROOM_REQUEST", import("./WebSocketConnectionReducer").IWebSocketRoom<string>> | TA.PayloadAction<"websocket/JOIN_ROOM_LOADING", import("./WebSocketConnectionReducer").IWebSocketRoomConnection> | TA.PayloadAction<"websocket/JOIN_ROOM_SUCCESS", import("./WebSocketConnectionReducer").IWebSocketRoomConnection> | TA.PayloadAction<"websocket/JOIN_ROOM_FAILURE", import("./WebSocketConnectionReducer").IWebSocketRoomConnection> | TA.PayloadAction<"websocket/LEAVE_ROOM_REQUEST", import("./WebSocketConnectionReducer").IWebSocketRoom<string>> | TA.PayloadAction<"websocket/LEAVE_ROOM_SUCCESS", import("./WebSocketConnectionReducer").IWebSocketRoom<string>> | TA.PayloadAction<"websocket/UPDATE_ROOM", import("../../../API/JSC").default.DTO.WebSocket.IWebSocketRoomUpdateDTO<any>> | TA.PayloadAction<"locale/SET_LOCALE", Action.setLocale.Payload>> & {
    handlers: Record<string, (state: State, action: TA.PayloadAction<string, number> | TA.PayloadAction<"app/INITIALZE", Action.initializeApp.Payload> | TA.EmptyAction<"app/INITIALZED"> | TA.EmptyAction<"config/LOAD"> | TA.PayloadAction<"config/LOADED", Action.ConfigLoaded.Payload> | TA.EmptyAction<"config/LOAD_FAILED"> | TA.PayloadAction<"language/CHANGE", import("../../../Types/Language").Language> | TA.EmptyAction<"language/INITIALIZE"> | TA.EmptyAction<"login/OPEN"> | TA.EmptyAction<"login/CLOSE"> | TA.PayloadAction<"login/UPDATE_CREDENTIALS", Action.updateCredentials.Payload> | TA.PayloadAction<"login/CHECK", Action.checkLogin.Payload> | TA.EmptyAction<"login/LOGGED_IN"> | TA.EmptyAction<"login/LOGIN_FAILED"> | TA.EmptyAction<"logout/OPEN"> | TA.EmptyAction<"logout/CLOSE"> | TA.EmptyAction<"logout/BEFORE_LOGOUT_HOOK"> | TA.EmptyAction<"logout/FINISHED"> | TA.EmptyAction<"navigation/OPEN"> | TA.EmptyAction<"navigation/CLOSE"> | TA.PayloadAction<string, import("../../../Types/Notification").INotificationContent> | TA.PayloadAction<string, INotification> | TA.PayloadAction<string, string> | TA.EmptyAction<"notification/DELETE_ALL"> | TA.EmptyAction<"notification/DELETE_NEXT"> | TA.EmptyAction<"notification/drawer/TOGGLE"> | TA.EmptyAction<"notification/drawer/SHOW"> | TA.EmptyAction<"notification/drawer/HIDE"> | TA.EmptyAction<"notification/drawer/PIN"> | TA.EmptyAction<"notification/drawer/UNPIN"> | TA.EmptyAction<"route/ENTER_AUTHORIZED"> | TA.EmptyAction<"route/ENTER_UNAUTHORIZED"> | TA.PayloadAction<string, Action.RouteDetails> | TA.EmptyAction<"session/LOAD"> | TA.EmptyAction<"route/CHECK"> | TA.PayloadAction<"route/LOGOUT", Action.logout.Payload> | TA.PayloadAction<"route/AUTHORIZE", Action.authorizeSession.Payload> | TA.EmptyAction<"route/UNAUTHORIZE"> | TA.EmptyAction<"settings/OPEN"> | TA.EmptyAction<"settings/CLOSE"> | TA.EmptyAction<"splitView/ENABLE"> | TA.EmptyAction<"splitView/DISABLE"> | TA.PayloadAction<"region/LOADED", Action.regionLoaded.Payload> | TA.EmptyAction<"region/GET_FAILED"> | TA.PayloadAction<"toast/ADD", import("./ToastReducer").IToastConfig> | TA.EmptyAction<"toast/DELETE"> | TA.PayloadAction<"websocket/ADD_NAMESPACE", string> | TA.PayloadAction<"websocket/CONNECT_REQUEST", string> | TA.PayloadAction<"websocket/CONNECT_SUCCESS", string> | TA.PayloadAction<"websocket/CONNECT_FAILED", import("./WebSocketConnectionReducer").IWebSocketError> | TA.PayloadAction<"websocket/DISCONNECT_REQUEST", string> | TA.PayloadAction<"websocket/DISCONNECT_SUCCESS", string> | TA.PayloadAction<"websocket/JOIN_ROOM_REQUEST", import("./WebSocketConnectionReducer").IWebSocketRoom<string>> | TA.PayloadAction<"websocket/JOIN_ROOM_LOADING", import("./WebSocketConnectionReducer").IWebSocketRoomConnection> | TA.PayloadAction<"websocket/JOIN_ROOM_SUCCESS", import("./WebSocketConnectionReducer").IWebSocketRoomConnection> | TA.PayloadAction<"websocket/JOIN_ROOM_FAILURE", import("./WebSocketConnectionReducer").IWebSocketRoomConnection> | TA.PayloadAction<"websocket/LEAVE_ROOM_REQUEST", import("./WebSocketConnectionReducer").IWebSocketRoom<string>> | TA.PayloadAction<"websocket/LEAVE_ROOM_SUCCESS", import("./WebSocketConnectionReducer").IWebSocketRoom<string>> | TA.PayloadAction<"websocket/UPDATE_ROOM", import("../../../API/JSC").default.DTO.WebSocket.IWebSocketRoomUpdateDTO<any>> | TA.PayloadAction<"locale/SET_LOCALE", Action.setLocale.Payload>) => State>;
};
export default Notification;

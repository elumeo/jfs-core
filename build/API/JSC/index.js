"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Client_1 = __importDefault(require("./Client"));
var rxjs_1 = require("rxjs");
var WebSocket_1 = require("../../Constant/WebSocket");
var JSCApi;
(function (JSCApi) {
    var DTO;
    (function (DTO) {
        var App;
        (function (App) {
            App.I_APP_DTO_FRONTEND_APP_DOCK = "appDock";
            App.I_APP_DTO_FRONTEND_JFS = "jfs";
        })(App = DTO.App || (DTO.App = {}));
    })(DTO = JSCApi.DTO || (JSCApi.DTO = {}));
    var DebugNotificationClient;
    (function (DebugNotificationClient) {
        DebugNotificationClient.sendToMattermost = function (message, config) {
            return Client_1.default.post("/debug/sendToMattermost", message, config);
        };
    })(DebugNotificationClient = JSCApi.DebugNotificationClient || (JSCApi.DebugNotificationClient = {}));
    var LoginClient;
    (function (LoginClient) {
        LoginClient.getLoginPublicKey = function (config) {
            return Client_1.default.get("/session-public-key", config);
        };
        LoginClient.loginFrontend = function (appName, credentials, config) {
            return Client_1.default.post("/session/" +
                encodeURIComponent(typeof appName === "number"
                    ? appName.toString()
                    : appName) +
                "", credentials, config);
        };
    })(LoginClient = JSCApi.LoginClient || (JSCApi.LoginClient = {}));
    var SessionClient;
    (function (SessionClient) {
        SessionClient.getCurrentSessionFrontend = function (appName, config) {
            return Client_1.default.get("/session/" +
                encodeURIComponent(typeof appName === "number"
                    ? appName.toString()
                    : appName) +
                "", config);
        };
        SessionClient.logout = function (session, config) {
            return Client_1.default.delete("/session", session, config);
        };
    })(SessionClient = JSCApi.SessionClient || (JSCApi.SessionClient = {}));
    var SystemClient;
    (function (SystemClient) {
        SystemClient.getRegion = function (config) {
            return Client_1.default.get("/region", config);
        };
    })(SystemClient = JSCApi.SystemClient || (JSCApi.SystemClient = {}));
    var UserClient;
    (function (UserClient) {
        UserClient.getUserRights = function (login, config) {
            return Client_1.default.get("/user/" +
                encodeURIComponent(typeof login === "number" ? login.toString() : login) +
                "/rights", config);
        };
    })(UserClient = JSCApi.UserClient || (JSCApi.UserClient = {}));
    var WebSocketClient;
    (function (WebSocketClient) {
        WebSocketClient.ROOM_PING = {
            namespace: "Jsc2Jfs",
            room: "ping",
        };
        var onRoomUpdatePingSubject = new rxjs_1.Subject();
        var onRoomUpdatePing$ = onRoomUpdatePingSubject.asObservable();
        WebSocketClient.onRoomUpdatePing = function (action) {
            if (action.type === WebSocket_1.ROOM_UPDATE_ACTION_ID &&
                action.payload.room === WebSocketClient.ROOM_PING.room) {
                onRoomUpdatePingSubject.next(action.payload.data);
            }
            return onRoomUpdatePing$;
        };
    })(WebSocketClient = JSCApi.WebSocketClient || (JSCApi.WebSocketClient = {}));
})(JSCApi || (JSCApi = {}));
exports.default = JSCApi;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Client_1 = __importDefault(require("./Client"));
var rxjs_1 = require("rxjs");
var WebSocket_1 = require("../../../Constant/WebSocket");
var JSCApi;
(function (JSCApi) {
    var DTO;
    (function (DTO) {
        var Authorization;
        (function (Authorization) {
            Authorization.I_ENTITY_ATTRIBUTE_ACCESS_DTO_ACCESS_READ = "1";
            Authorization.I_ENTITY_ATTRIBUTE_ACCESS_DTO_ACCESS_WRITE = "2";
            Authorization.I_ENTITY_ATTRIBUTE_ACCESS_DTO_ACCESS_CREATE = "4";
            Authorization.I_ENTITY_ATTRIBUTE_ACCESS_DTO_ACCESS_DELETE = "8";
            Authorization.I_ENTITY_ATTRIBUTE_ACCESS_DTO_ACCESS_READWRITE = "3";
        })(Authorization = DTO.Authorization || (DTO.Authorization = {}));
        var App;
        (function (App) {
            App.I_APP_DTO_FRONTEND_APP_DOCK = "appDock";
            App.I_APP_DTO_FRONTEND_JFS = "jfs";
        })(App = DTO.App || (DTO.App = {}));
    })(DTO = JSCApi.DTO || (JSCApi.DTO = {}));
    var LoginClient;
    (function (LoginClient) {
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

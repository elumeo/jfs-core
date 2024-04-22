"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
// import { connectRouter, RouterState } from 'connected-react-router'
var App_1 = __importDefault(require("./App"));
var Configuration_1 = __importDefault(require("./Configuration"));
var Language_1 = __importDefault(require("./Language"));
var Logout_1 = __importDefault(require("./Logout"));
var Debug_1 = __importDefault(require("./Debug"));
var Navigation_1 = __importDefault(require("./Navigation"));
var Notification_1 = __importDefault(require("./Notification"));
var Router_1 = __importDefault(require("./Router"));
var Session_1 = __importDefault(require("./Session"));
var Settings_1 = __importDefault(require("./Settings"));
var System_1 = __importDefault(require("./System"));
var Toast_1 = __importDefault(require("./Toast"));
var Login_1 = __importDefault(require("./Login"));
var Locale_1 = __importDefault(require("./Locale"));
var WebSocket_1 = __importDefault(require("./WebSocket"));
var LocalStorage_reducer_1 = __importDefault(require("./LocalStorage.reducer"));
var Core = (0, redux_1.combineReducers)({
    App: App_1.default,
    Configuration: Configuration_1.default,
    Debug: Debug_1.default,
    Language: Language_1.default,
    Login: Login_1.default,
    Logout: Logout_1.default,
    Navigation: Navigation_1.default,
    Notification: Notification_1.default,
    Router: Router_1.default,
    Session: Session_1.default,
    Settings: Settings_1.default,
    System: System_1.default,
    Toast: Toast_1.default,
    WebSocket: WebSocket_1.default,
    Locale: Locale_1.default,
    LocalStorage: LocalStorage_reducer_1.default,
});
exports.default = Core;

"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@welldone-software/why-did-you-render/jsx-runtime");
require("./wdyr");
var client_1 = require("react-dom/client");
var App_1 = __importDefault(require("Component/App"));
var Login = __importStar(require("Component/Login"));
var Logout = __importStar(require("Component/Logout"));
var Settings = __importStar(require("Component/Settings"));
var Language = __importStar(require("Component/Language"));
var Header = __importStar(require("Component/Header"));
var Global_1 = __importDefault(require("./Store/Reducer/Global"));
var Epic_1 = __importDefault(require("./Store/Epic"));
var Notification = __importStar(require("Component/Notification"));
var Snackbar_1 = __importDefault(require("Component/Snackbar"));
var Overlay_1 = __importDefault(require("Component/Overlay"));
var Setup_1 = require("Setup");
var package_json_1 = __importDefault(require("../package.json"));
var Store_1 = require("Store");
var Indicator_1 = __importDefault(require("Component/WebSocket/Room/Status/Indicator"));
var DebugButton_1 = __importDefault(require("Component/Button/DebugButton"));
if (module.hot) {
    module.hot.accept();
}
var container = document.getElementById('root');
var root = (0, client_1.createRoot)(container);
root.render((0, jsx_runtime_1.jsxs)(App_1.default, __assign({ store: (0, Store_1.create)(Epic_1.default, Global_1.default), title: 'core', translations: Setup_1.Translations, packageJSON: package_json_1.default }, { children: [(0, jsx_runtime_1.jsx)(Header.AppToolbar, { left: (0, jsx_runtime_1.jsx)(Header.BackendIndicator, {}), right: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Indicator_1.default, { client: {
                            Host: 'https://api-test.juwelo.de',
                            Path: '/staging/websocket2.services',
                            PrivateNamespace: 'Jsc2Jfs',
                            AutoRoomSubscriptions: ['currentGame', 'plannedGames']
                        }, roomName: 'currentGame' }), (0, jsx_runtime_1.jsx)(Settings.Button, {}), (0, jsx_runtime_1.jsx)(DebugButton_1.default, {}), (0, jsx_runtime_1.jsx)(Notification.Button.Show, {})] }) }), (0, jsx_runtime_1.jsx)(Setup_1.Routes, {}), (0, jsx_runtime_1.jsxs)(Overlay_1.default, { children: [(0, jsx_runtime_1.jsx)(Setup_1.Navigation, {}), (0, jsx_runtime_1.jsx)(Login.Dialog, {}), (0, jsx_runtime_1.jsx)(Logout.Dialog, {}), (0, jsx_runtime_1.jsx)(Settings.Dialog, { children: (0, jsx_runtime_1.jsx)(Language.Settings, {}) }), (0, jsx_runtime_1.jsx)(Snackbar_1.default, {})] })] })));

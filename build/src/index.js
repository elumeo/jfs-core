"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var App_1 = __importDefault(require("../Component/App"));
var Login = __importStar(require("../Component/Login"));
var Logout = __importStar(require("../Component/Logout"));
var Settings = __importStar(require("../Component/Settings"));
var Language = __importStar(require("../Component/Language"));
var Header = __importStar(require("../Component/Header"));
var Global_1 = __importDefault(require("./Store/Reducer/Global"));
var Epic_1 = __importDefault(require("./Store/Epic"));
var Notification = __importStar(require("../Component/Notification"));
var Snackbar_1 = __importDefault(require("../Component/Snackbar"));
var Overlay_1 = __importDefault(require("../Component/Overlay"));
var Setup_1 = require("Setup");
var package_json_1 = __importDefault(require("../package.json"));
var Store_1 = require("Store");
var Middleware_1 = require("../Store/Middleware");
react_dom_1.default.render(react_1.default.createElement(App_1.default, { store: (0, Store_1.create)(Epic_1.default, (0, Global_1.default)(Middleware_1.history)), title: 'core', translations: Setup_1.Translations, packageJSON: package_json_1.default },
    react_1.default.createElement(Header.AppToolbar, { left: react_1.default.createElement(Header.BackendIndicator, null), right: react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Settings.Button, null),
            react_1.default.createElement(Notification.Button.Show, null)) }),
    react_1.default.createElement(Setup_1.Routes, null),
    react_1.default.createElement(Overlay_1.default, null,
        react_1.default.createElement(Setup_1.Navigation, null),
        react_1.default.createElement(Login.Dialog, null),
        react_1.default.createElement(Logout.Dialog, null),
        react_1.default.createElement(Settings.Dialog, null,
            react_1.default.createElement(Language.Settings, null)),
        react_1.default.createElement(Snackbar_1.default, null))), document.getElementById('root'));

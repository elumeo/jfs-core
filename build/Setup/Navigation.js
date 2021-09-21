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
var Divider_1 = __importDefault(require("@material-ui/core/Divider"));
var Navigation = __importStar(require("../Component/Navigation"));
var Logout = __importStar(require("../Component/Logout"));
var Settings = __importStar(require("../Component/Settings"));
var Drawer = function () { return (react_1.default.createElement(Navigation.Drawer, null,
    react_1.default.createElement(Navigation.Item, { iconName: 'account_box', messageId: 'app.login', unauthorizedOnly: true, onClickRoute: '/start' }),
    react_1.default.createElement(Navigation.Item, { iconName: 'home', messageId: 'app.title', onClickRoute: '/start', authorizedOnly: true }),
    react_1.default.createElement(Divider_1.default, null),
    react_1.default.createElement(Settings.NavigationItem, null),
    react_1.default.createElement(Divider_1.default, null),
    react_1.default.createElement(Logout.NavigationItem, null))); };
exports.default = Drawer;

"use strict";
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
var Divider_1 = __importDefault(require("@mui/material/Divider"));
var Navigation = __importStar(require("../Component/Navigation"));
var Logout = __importStar(require("../Component/Logout"));
var Settings = __importStar(require("../Component/Settings"));
var Version_1 = require("../Component/Version");
var Drawer = function () { return ((0, jsx_runtime_1.jsxs)(Navigation.Drawer, { children: [(0, jsx_runtime_1.jsx)(Navigation.Item, { iconName: 'account_box', messageId: 'app.login', unauthorizedOnly: true, onClickRoute: '/start' }), (0, jsx_runtime_1.jsx)(Navigation.Item, { iconName: 'home', messageId: 'app.title', onClickRoute: '/start', authorizedOnly: true }), (0, jsx_runtime_1.jsx)(Divider_1.default, {}), (0, jsx_runtime_1.jsx)(Settings.NavigationItem, {}), (0, jsx_runtime_1.jsx)(Divider_1.default, {}), (0, jsx_runtime_1.jsx)(Logout.NavigationItem, {}), (0, jsx_runtime_1.jsx)(Version_1.VersionNavigationItem, {})] })); };
exports.default = Drawer;

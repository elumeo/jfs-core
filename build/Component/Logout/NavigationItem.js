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
var Navigation = __importStar(require("../Navigation"));
var Redux_1 = require("../../Types/Redux");
var useActions_1 = __importDefault(require("../../Store/useActions"));
var NavigationItem = function () {
    var openLogout = (0, useActions_1.default)().openLogout;
    var robotLoginAvailable = (0, Redux_1.useSelector)(function (state) {
        return state.Core.Configuration.config &&
            state.Core.Configuration.config.RobotUsername &&
            state.Core.Configuration.config.RobotPassword &&
            state.Core.App.allowRobotLogin;
    });
    return !robotLoginAvailable ? (react_1.default.createElement(Navigation.Item, { iconName: 'exit_to_app', messageId: 'app.logout', authorizedOnly: true, onClick: function () { return openLogout(); } })) : (react_1.default.createElement(react_1.default.Fragment, null));
};
exports.default = NavigationItem;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Redux_1 = require("../../../Types/Redux");
var Card_1 = __importDefault(require("../../Notification/Card"));
var Empty_1 = __importDefault(require("./Empty"));
var ListItem_1 = __importDefault(require("@material-ui/core/ListItem"));
var All = function () {
    var history = (0, Redux_1.useSelector)(function (state) { return state.Core.Notification.history; });
    (0, Redux_1.useSelector)(function (state) { return state.Core.App.appInitialized; });
    return history.length ? (react_1.default.createElement("div", { style: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            overflowY: 'scroll',
            gap: '8px',
        } }, history.map(function (notification) { return (react_1.default.createElement(ListItem_1.default, { key: notification.id, style: { width: '100%' } },
        react_1.default.createElement(Card_1.default, { notification: notification, temporary: false }))); }))) : (react_1.default.createElement(Empty_1.default, null));
};
exports.default = All;

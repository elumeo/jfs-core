"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Delete_1 = __importDefault(require("@material-ui/icons/Delete"));
var useActions_1 = __importDefault(require("../../../../Store/useActions"));
var Redux_1 = require("../../../../Types/Redux");
var DismissAllNotificationsButton = function () {
    var history = (0, Redux_1.useSelector)(function (state) { return state.Core.Notification.history; });
    var removeAllNotifications = (0, useActions_1.default)().removeAllNotifications;
    return (react_1.default.createElement(IconButton_1.default, { onClick: removeAllNotifications, disabled: !history.length },
        react_1.default.createElement(Delete_1.default, null)));
};
exports.default = DismissAllNotificationsButton;

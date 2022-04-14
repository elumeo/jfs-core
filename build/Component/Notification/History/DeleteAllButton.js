"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var Delete_1 = __importDefault(require("@material-ui/icons/Delete"));
var useActions_1 = __importDefault(require("../../../Store/useActions"));
var Redux_1 = require("../../../Types/Redux");
var react_intl_1 = require("react-intl");
var DeleteAllButton = function () {
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    var history = (0, Redux_1.useSelector)(function (state) { return state.Core.Notification.history; });
    var removeAllNotifications = (0, useActions_1.default)().removeAllNotifications;
    return (react_1.default.createElement(Button_1.default, { onClick: function () { return removeAllNotifications(); }, disabled: !history.length, startIcon: react_1.default.createElement(Delete_1.default, null) }, formatMessage({ id: 'notification.removeAll' })));
};
exports.default = DeleteAllButton;

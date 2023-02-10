"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var Delete_1 = __importDefault(require("@mui/icons-material/Delete"));
var Redux_1 = require("../../../Types/Redux");
var react_intl_1 = require("react-intl");
var react_redux_1 = require("react-redux");
var Action_1 = require("../../../Store/Action");
var DeleteAllButton = function () {
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    var dispatch = (0, react_redux_1.useDispatch)();
    var history = (0, Redux_1.useSelector)(function (state) { return state.Core.Notification.history; });
    return (react_1.default.createElement(Button_1.default, { onClick: function () { return dispatch((0, Action_1.removeAllNotifications)()); }, disabled: !history.length, startIcon: react_1.default.createElement(Delete_1.default, null) }, formatMessage({ id: 'notification.removeAll' })));
};
exports.default = DeleteAllButton;

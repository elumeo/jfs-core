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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
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
    return ((0, jsx_runtime_1.jsx)(Button_1.default, __assign({ onClick: function () { return dispatch((0, Action_1.removeAllNotifications)()); }, disabled: !history.length, startIcon: (0, jsx_runtime_1.jsx)(Delete_1.default, {}) }, { children: formatMessage({ id: 'notification.removeAll' }) })));
};
exports.default = DeleteAllButton;

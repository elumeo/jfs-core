"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_intl_1 = require("react-intl");
var Redux_1 = require("../../Types/Redux");
var Button_1 = require("../Button");
var Submit = function (_a) {
    var onClick = _a.onClick, disabled = _a.disabled;
    var intl = (0, react_intl_1.useIntl)();
    var isCheckingLogin = (0, Redux_1.useSelector)(function (state) { return state.Core.Login.isCheckingLogin; });
    return react_1.default.createElement(Button_1.ButtonProgress, { color: 'primary', variant: 'contained', onClick: onClick, disabled: disabled, inProgress: isCheckingLogin }, intl.formatMessage({ id: 'login.button' }));
};
exports.default = Submit;

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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_intl_1 = require("react-intl");
var Redux_1 = require("../../Types/Redux");
var Button_1 = require("../Button");
var Submit = function (_a) {
    var onClick = _a.onClick, disabled = _a.disabled;
    var intl = (0, react_intl_1.useIntl)();
    var isCheckingLogin = (0, Redux_1.useSelector)(function (state) { return state.Core.Login.isCheckingLogin; });
    return (0, jsx_runtime_1.jsx)(Button_1.ButtonProgress, __assign({ color: 'primary', variant: 'contained', onClick: onClick, disabled: disabled, inProgress: isCheckingLogin }, { children: intl.formatMessage({ id: 'login.button' }) }));
};
exports.default = Submit;

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
var jsx_runtime_1 = require("@welldone-software/why-did-you-render/jsx-runtime");
var react_intl_1 = require("react-intl");
var Button_1 = __importDefault(require("@mui/material/Button"));
var Cancel = function (_a) {
    var onClick = _a.onClick;
    var intl = (0, react_intl_1.useIntl)();
    return ((0, jsx_runtime_1.jsx)(Button_1.default, __assign({ onClick: onClick, variant: 'outlined' }, { children: intl.formatMessage({ id: 'app.cancel.action' }) })));
};
exports.default = Cancel;

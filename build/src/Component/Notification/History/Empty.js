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
var react_1 = __importDefault(require("react"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var Notifications_1 = __importDefault(require("@mui/icons-material/Notifications"));
var react_intl_1 = require("react-intl");
var material_1 = require("@mui/material");
var Empty = function () {
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    var iconRef = react_1.default.useRef();
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, __assign({ sx: {
            width: 'max-content',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            color: 'grey',
        } }, { children: [(0, jsx_runtime_1.jsx)(Notifications_1.default, { fontSize: 'large', ref: iconRef }), (0, jsx_runtime_1.jsx)(Typography_1.default, { children: formatMessage({ id: 'app.noNotifications' }) })] })));
};
exports.default = Empty;

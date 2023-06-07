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
var Icon_1 = __importDefault(require("@mui/material/Icon"));
var NotificationIcon = function (_a) {
    var variant = _a.variant;
    switch (variant) {
        case 'success':
            return (0, jsx_runtime_1.jsx)(Icon_1.default, __assign({ color: 'inherit' }, { children: "check" }));
        case 'error':
        case 'warning':
        case 'info':
            return (0, jsx_runtime_1.jsx)(Icon_1.default, __assign({ color: 'inherit' }, { children: variant }));
        case 'default':
        default:
            return undefined;
    }
};
exports.default = NotificationIcon;

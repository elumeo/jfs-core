"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Icon_1 = __importDefault(require("@mui/material/Icon"));
var NotificationIcon = function (_a) {
    var variant = _a.variant;
    switch (variant) {
        case 'success':
            return react_1.default.createElement(Icon_1.default, { color: 'inherit' }, "check");
        case 'error':
        case 'warning':
        case 'info':
            return react_1.default.createElement(Icon_1.default, { color: 'inherit' }, variant);
        case 'default':
        default:
            return undefined;
    }
};
exports.default = NotificationIcon;

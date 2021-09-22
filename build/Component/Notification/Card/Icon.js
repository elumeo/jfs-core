"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Icon_1 = __importDefault(require("@material-ui/core/Icon"));
var Icon = function (_a) {
    var variant = _a.variant;
    var iconName = react_1.default.useMemo(function () {
        if (variant === 'error') {
            return 'cancel';
        }
        else if (variant === 'default') {
            return 'alert';
        }
        else if (variant === 'success') {
            return 'check';
        }
        else {
            return variant;
        }
    }, [variant]);
    return iconName ? react_1.default.createElement(Icon_1.default, { color: 'inherit' }, iconName) : null;
};
exports.default = Icon;

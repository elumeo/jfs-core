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
var Snackbar_1 = __importDefault(require("@mui/material/Snackbar/Snackbar"));
var useVisibleToast_1 = __importDefault(require("./useVisibleToast"));
var material_1 = require("@mui/material");
var react_redux_1 = require("react-redux");
var Action_1 = require("Store/Action");
var anchor = {
    vertical: 'bottom',
    horizontal: 'center',
};
var Snackbar = function () {
    var dispatch = (0, react_redux_1.useDispatch)();
    var id = react_1.default.useId();
    var _a = (0, useVisibleToast_1.default)(), open = _a.open, severity = _a.severity, message = _a.message, autoHideDuration = _a.autoHideDuration;
    var onCloseCallback = react_1.default.useCallback(function (event, reason) {
        if (reason === 'timeout') {
            dispatch((0, Action_1.dismissToastAction)());
        }
    }, [dispatch]);
    return ((0, jsx_runtime_1.jsx)(Snackbar_1.default, __assign({ open: open, id: "alert-snackbar-".concat(id), onClose: onCloseCallback, anchorOrigin: anchor, autoHideDuration: autoHideDuration }, { children: open ? (0, jsx_runtime_1.jsx)(material_1.Alert, __assign({ severity: severity, variant: 'filled' }, { children: message })) : null })));
};
exports.default = Snackbar;

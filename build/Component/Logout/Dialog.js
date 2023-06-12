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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var react_intl_1 = require("react-intl");
var Dialog_1 = __importDefault(require("@mui/material/Dialog"));
var DialogContent_1 = __importDefault(require("@mui/material/DialogContent"));
var DialogActions_1 = __importDefault(require("@mui/material/DialogActions"));
var Button = __importStar(require("./Button"));
var useLogout_1 = __importDefault(require("./useLogout"));
var Text_1 = __importDefault(require("./Text"));
var DialogTitle_1 = __importDefault(require("@mui/material/DialogTitle"));
var styles = { minHeight: 80 };
var Dialog = function (_a) {
    var children = _a.children, onLogout = _a.onLogout, _b = _a.pending, pending = _b === void 0 ? false : _b;
    var logout = (0, useLogout_1.default)();
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    var onClick = react_1.default.useCallback(function () { return onLogout ? onLogout() : logout.commit({}); }, [logout, onLogout]);
    return ((0, jsx_runtime_1.jsxs)(Dialog_1.default, __assign({ open: logout.open, onClose: logout.close, "aria-labelledby": 'logout-description', disableEscapeKeyDown: logout.pending === true, maxWidth: 'xs', fullWidth: true }, { children: [(0, jsx_runtime_1.jsx)(DialogTitle_1.default, { children: formatMessage({ id: 'app.logout.title' }) }), (0, jsx_runtime_1.jsx)(DialogContent_1.default, __assign({ sx: styles }, { children: (0, jsx_runtime_1.jsx)(Text_1.default, { override: children }) })), (0, jsx_runtime_1.jsxs)(DialogActions_1.default, __assign({ disableSpacing: false }, { children: [(0, jsx_runtime_1.jsx)(Button.Cancel, { onClick: logout.close }), (0, jsx_runtime_1.jsx)(Button.Submit, { pending: pending || logout.pending, onClick: onClick })] }))] })));
};
exports.default = Dialog;

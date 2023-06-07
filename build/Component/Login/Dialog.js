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
var Dialog_1 = __importDefault(require("@mui/material/Dialog"));
var DialogTitle_1 = __importDefault(require("@mui/material/DialogTitle"));
var DialogContent_1 = __importDefault(require("@mui/material/DialogContent"));
var DialogActions_1 = __importDefault(require("@mui/material/DialogActions"));
var Credentials_1 = __importDefault(require("./Credentials"));
var Submit_1 = __importDefault(require("./Submit"));
var useLogin_1 = __importDefault(require("./useLogin"));
var react_intl_1 = require("react-intl");
var sx = {
    marginBottom: '32vh'
};
var Dialog = function () {
    var _a = (0, useLogin_1.default)(), open = _a.open, credentials = _a.credentials, onChange = _a.onChange, check = _a.check;
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    return ((0, jsx_runtime_1.jsxs)(Dialog_1.default, __assign({ open: open, sx: sx }, { children: [(0, jsx_runtime_1.jsx)(DialogTitle_1.default, { children: formatMessage({ id: 'app.login' }) }), (0, jsx_runtime_1.jsx)(DialogContent_1.default, { children: (0, jsx_runtime_1.jsx)(Credentials_1.default, { value: credentials, onChange: onChange, onSubmit: check }) }), (0, jsx_runtime_1.jsx)(DialogActions_1.default, { children: (0, jsx_runtime_1.jsx)(Submit_1.default, { onClick: check, disabled: !credentials.username ||
                        !credentials.password }) })] })));
};
exports.default = Dialog;

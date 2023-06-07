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
var react_1 = __importDefault(require("react"));
var react_intl_1 = require("react-intl");
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var isEmptyString_1 = __importDefault(require("./isEmptyString"));
var icons_material_1 = require("@mui/icons-material");
var material_1 = require("@mui/material");
var Password = react_1.default.forwardRef(function (_a, ref) {
    var value = _a.value, onChange = _a.onChange, onEnter = _a.onEnter;
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    var error = (0, isEmptyString_1.default)(value);
    var _b = react_1.default.useState(true), hidden = _b[0], setHidden = _b[1];
    var helperText = error && !value
        ? formatMessage({ id: 'login.password.errorText' })
        : null;
    var handleChange = function (event) {
        onChange(event.target.value);
    };
    var handleEnter = function (event) { return event.key === 'Enter' && onEnter(); };
    return ((0, jsx_runtime_1.jsx)(TextField_1.default, { autoComplete: 'current-password', id: 'password', type: hidden ? 'password' : 'text', inputRef: ref, required: true, label: formatMessage({ id: 'login.password' }), error: error, helperText: helperText, value: value !== null && value !== void 0 ? value : '', InputProps: { endAdornment: (0, jsx_runtime_1.jsx)(material_1.IconButton, __assign({ onClick: function () { return setHidden(function (toggle) { return !toggle; }); } }, { children: hidden ? (0, jsx_runtime_1.jsx)(icons_material_1.Visibility, {}) : (0, jsx_runtime_1.jsx)(icons_material_1.VisibilityOff, {}) })) }, onChange: handleChange, onKeyPress: handleEnter }));
});
exports.default = Password;

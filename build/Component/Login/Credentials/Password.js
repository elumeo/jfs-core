"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
    return (react_1.default.createElement(TextField_1.default, { autoComplete: 'current-password', id: 'password', type: hidden ? 'password' : 'text', inputRef: ref, required: true, label: formatMessage({ id: 'login.password' }), error: error, helperText: helperText, value: value !== null && value !== void 0 ? value : '', InputProps: { endAdornment: react_1.default.createElement(material_1.IconButton, { onClick: function () { return setHidden(function (toggle) { return !toggle; }); } }, hidden ? react_1.default.createElement(icons_material_1.Visibility, null) : react_1.default.createElement(icons_material_1.VisibilityOff, null)) }, onChange: handleChange, onKeyPress: handleEnter }));
});
exports.default = Password;

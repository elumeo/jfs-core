"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_intl_1 = require("react-intl");
var TextField_1 = __importDefault(require("@material-ui/core/TextField"));
var useError_1 = __importDefault(require("./useError"));
var Password = react_1.default.forwardRef(function (_a, ref) {
    var value = _a.value, onChange = _a.onChange, onEnter = _a.onEnter;
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    var error = (0, useError_1.default)(value);
    return (react_1.default.createElement(TextField_1.default, { autoComplete: 'current-password', id: 'password', type: 'password', inputRef: ref, required: true, placeholder: formatMessage({ id: 'login.password' }), error: error, helperText: error && !value
            ? formatMessage({ id: 'login.password.errorText' })
            : null, value: value, onChange: function (event) { return onChange(event.target.value); }, onKeyPress: function (e) { return e.key === 'Enter' && onEnter(); } }));
});
exports.default = Password;

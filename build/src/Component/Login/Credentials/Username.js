"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_intl_1 = require("react-intl");
var TextField_1 = __importDefault(require("@material-ui/core/TextField"));
var useError_1 = __importDefault(require("./useError"));
var Username = react_1.default.forwardRef(function (_a, ref) {
    var value = _a.value, onChange = _a.onChange, onEnter = _a.onEnter;
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    var error = (0, useError_1.default)(value);
    return (react_1.default.createElement(TextField_1.default, { autoComplete: 'username', id: 'username', type: 'text', inputRef: ref, required: true, error: error, placeholder: formatMessage({ id: 'login.username' }), helperText: error && !value
            ? formatMessage({ id: 'login.username.errorText' })
            : null, value: value, onChange: function (event) { return onChange(event.target.value); }, onKeyPress: function (event) { return event.key === 'Enter' && onEnter(); } }));
});
exports.default = Username;

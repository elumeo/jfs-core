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
var react_1 = __importDefault(require("react"));
var Username_1 = __importDefault(require("./Username"));
var Password_1 = __importDefault(require("./Password"));
var useAutoFocus_1 = __importDefault(require("./useAutoFocus"));
var Form_1 = __importDefault(require("./Form"));
var Credentials = function (_a) {
    var value = _a.value, onChange = _a.onChange, onSubmit = _a.onSubmit;
    var username = react_1.default.useRef();
    var password = react_1.default.useRef();
    (0, useAutoFocus_1.default)(username);
    return react_1.default.createElement(Form_1.default, null,
        react_1.default.createElement(Username_1.default, { ref: username, value: value.username, onChange: function (next) { return onChange(__assign(__assign({}, value), { username: next })); }, onEnter: function () { return password.current.focus(); } }),
        react_1.default.createElement(Password_1.default, { ref: password, value: value.password, onChange: function (next) { return onChange(__assign(__assign({}, value), { password: next })); }, onEnter: onSubmit }));
};
exports.default = Credentials;

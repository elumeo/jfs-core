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
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var Backspace_1 = __importDefault(require("@material-ui/icons/Backspace"));
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var TextFieldClearButton = function (_a) {
    var onChange = _a.onChange, _b = _a.iconButtonSize, iconButtonSize = _b === void 0 ? 'medium' : _b, _c = _a.variant, variant = _c === void 0 ? 'standard' : _c, rest = __rest(_a, ["onChange", "iconButtonSize", "variant"]);
    var getIconSize = function () { return iconButtonSize === 'medium' ? 24 : 18; };
    var getIconButtonPadding = function () { return iconButtonSize === 'medium' ? 12 : 6; };
    var endAdornment = (react_1.default.createElement(core_1.InputAdornment, { position: 'end' },
        react_1.default.createElement(core_1.IconButton, { size: iconButtonSize, disabled: rest.disabled, color: 'secondary', onClick: function () { return onChange(''); }, style: { padding: getIconButtonPadding() } },
            react_1.default.createElement(Backspace_1.default, { style: { fontSize: getIconSize() } }))));
    var preparedInputProps = __assign(__assign({}, rest.InputProps), { endAdornment: endAdornment });
    return (react_1.default.createElement(core_1.TextField, __assign({ onChange: function (event) { return onChange(event.target.value); }, InputProps: preparedInputProps, autoComplete: 'new-password' }, rest)));
};
exports.default = (0, react_1.memo)(TextFieldClearButton);

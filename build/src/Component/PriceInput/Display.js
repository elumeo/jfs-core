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
var useCurrency_1 = __importDefault(require("../../../Effect/useCurrency"));
var Format_1 = require("../../../Utilities/Format");
var Display = function (_a) {
    var _b;
    var _c = _a.currency, currency = _c === void 0 ? (0, useCurrency_1.default)() : _c, _d = _a.value, value = _d === void 0 ? 0.0 : _d, props = __rest(_a, ["currency", "value"]);
    var sanitized = react_1.default.useMemo(function () { return Format_1.Currency.formatDisplay(value); }, [value]);
    var display = react_1.default.useMemo(function () { return Format_1.Currency.getCurrency(currency, parseFloat(sanitized), true, false); }, [sanitized, currency]);
    return (react_1.default.createElement(core_1.TextField, __assign({}, props, { value: display, InputProps: (_b = {},
            _b[currency.toLowerCase() === 'eur'
                ? 'endAdornment'
                : 'startAdornment'] = (react_1.default.createElement(core_1.InputAdornment, { position: currency.toLowerCase() === 'eur' ? 'end' : 'start', style: { userSelect: 'none' } }, Format_1.Currency.getCurrencySign(currency))),
            _b) })));
};
exports.default = (0, react_1.memo)(Display);

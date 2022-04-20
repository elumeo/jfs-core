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
var Format_1 = require("../../Utilities/Format");
var usePriceFieldAdornment_1 = __importDefault(require("../../Effect/usePriceFieldAdornment"));
var Display = function (_a) {
    var _b;
    var currency = _a.currency, _c = _a.value, value = _c === void 0 ? 0.0 : _c, showDecimals = _a.showDecimals, min = _a.min, max = _a.max, props = __rest(_a, ["currency", "value", "showDecimals", "min", "max"]);
    var sanitized = react_1.default.useMemo(function () { return Format_1.Currency.formatDisplay(value, min, max); }, [value, min, max]);
    react_1.default.useEffect(function () {
        props === null || props === void 0 ? void 0 : props.onChange({ target: { value: sanitized } });
    }, [sanitized]);
    var display = react_1.default.useMemo(function () { return Format_1.Currency.getCurrency(currency, parseFloat(sanitized), true, false, showDecimals); }, [sanitized, currency, showDecimals]);
    var _d = (0, usePriceFieldAdornment_1.default)(currency), adornmentType = _d[0], adornmentPosition = _d[1], styles = _d[2];
    return react_1.default.createElement(core_1.TextField, __assign({}, props, { value: display, InputProps: (_b = {},
            _b[adornmentType] = react_1.default.createElement(core_1.InputAdornment, { position: adornmentPosition, style: styles }, Format_1.Currency.getCurrencySign(currency)),
            _b) }));
};
exports.default = (0, react_1.memo)(Display);

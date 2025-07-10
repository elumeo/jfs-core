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
var jsx_runtime_1 = require("@welldone-software/why-did-you-render/jsx-runtime");
var react_intl_1 = require("react-intl");
var Style_1 = __importDefault(require("./Style"));
var Picker_1 = __importDefault(require("./Picker"));
var Stateless = function (_a) {
    var locale = _a.locale, children = _a.children, intlProviderProps = __rest(_a, ["locale", "children"]);
    return (0, jsx_runtime_1.jsx)(react_intl_1.IntlProvider, __assign({ locale: locale }, intlProviderProps, { children: (0, jsx_runtime_1.jsx)(Style_1.default, { children: (0, jsx_runtime_1.jsx)(Picker_1.default, __assign({ locale: locale }, { children: children })) }) }));
};
Stateless.Style = Style_1.default;
exports.default = Stateless;

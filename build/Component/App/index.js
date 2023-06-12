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
var Stateless_1 = __importDefault(require("./Stateless"));
var Stateful_1 = __importDefault(require("./Stateful"));
var Title_1 = __importDefault(require("./Title"));
var moment_1 = __importDefault(require("moment"));
Date.prototype.toJSON = function () {
    return (0, moment_1.default)(this).format();
};
var App = function (_a) {
    var children = _a.children, translations = _a.translations, packageJSON = _a.packageJSON, title = _a.title, store = _a.store;
    return ((0, jsx_runtime_1.jsxs)(Stateful_1.default, __assign({ store: store }, { children: [(0, jsx_runtime_1.jsx)(Title_1.default, { value: title || packageJSON.name }), (0, jsx_runtime_1.jsx)(Stateful_1.default.Initialized, { children: (0, jsx_runtime_1.jsx)(Stateful_1.default.International, __assign({ translations: translations }, { children: function (_a) {
                        var locale = _a.locale;
                        return ((0, jsx_runtime_1.jsx)(Stateless_1.default, __assign({ locale: locale, messages: translations[locale] }, { children: (0, jsx_runtime_1.jsx)(Stateful_1.default.Snackbar, { children: children }) })));
                    } })) }), (0, jsx_runtime_1.jsx)(Stateful_1.default.Uninitialized, { children: (0, jsx_runtime_1.jsx)(Stateless_1.default.Style, { children: (0, jsx_runtime_1.jsx)(Stateful_1.default.Initializer, { packageJSON: packageJSON, translations: translations }) }) })] })));
};
exports.default = App;

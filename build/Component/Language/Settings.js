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
var react_intl_1 = require("react-intl");
var InputLabel_1 = __importDefault(require("@mui/material/InputLabel"));
var Select_1 = __importDefault(require("./Select"));
var useLanguage_1 = __importDefault(require("./useLanguage"));
var material_1 = require("@mui/material");
var Settings = function () {
    var language = (0, useLanguage_1.default)();
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, __assign({ sx: {
            width: 240,
        } }, { children: [(0, jsx_runtime_1.jsx)(InputLabel_1.default, { children: formatMessage({ id: 'settings.language' }) }), (0, jsx_runtime_1.jsx)(Select_1.default, { value: language.value, onChange: language.onChange })] })));
};
exports.default = Settings;

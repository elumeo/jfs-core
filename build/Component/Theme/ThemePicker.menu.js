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
var jsx_runtime_1 = require("@welldone-software/why-did-you-render/jsx-runtime");
var material_1 = require("@mui/material");
var useTheme_1 = __importDefault(require("../../Effect/useTheme"));
var Theme_action_1 = require("../../Store/Action/Theme.action");
var ThemeVariant_type_1 = require("../../Types/ThemeVariant.type");
var react_redux_1 = require("react-redux");
var ThemePickerMenu = function () {
    var themeVariant = (0, useTheme_1.default)().themeVariant;
    var dispatch = (0, react_redux_1.useDispatch)();
    var handleChange = function (event) {
        return dispatch((0, Theme_action_1.savePreferredThemeVariant)(event.target.value));
    };
    return (0, jsx_runtime_1.jsxs)(material_1.FormControl, __assign({ fullWidth: true }, { children: [(0, jsx_runtime_1.jsx)(material_1.InputLabel, __assign({ id: 'theme-picker-label' }, { children: "Theme Variante" })), (0, jsx_runtime_1.jsx)(material_1.Select, __assign({ labelId: 'theme-picker-label', id: 'theme-picker', value: themeVariant, label: 'theme', onChange: handleChange }, { children: Object.keys(ThemeVariant_type_1.ThemeVariant).map(function (themeVariant) {
                    return (0, jsx_runtime_1.jsx)(material_1.MenuItem, __assign({ value: themeVariant }, { children: themeVariant }), themeVariant);
                }) }))] }));
};
exports.default = ThemePickerMenu;

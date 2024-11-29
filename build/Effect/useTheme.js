"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var usePreferredThemeVariant_1 = __importDefault(require("./usePreferredThemeVariant"));
var Definition_1 = require("../Component/App/Stateless/Style/Theme/Definition");
var ThemeVariant_type_1 = require("../Types/ThemeVariant.type");
var material_1 = require("@mui/material");
exports.default = (function () {
    var isSystemDarkThemed = (0, material_1.useMediaQuery)('(prefers-color-scheme: dark)');
    var themeVariant = (0, usePreferredThemeVariant_1.default)();
    var _theme = react_1.default.useMemo(function () {
        return themeVariant === ThemeVariant_type_1.ThemeVariant.AUTO_DETECT
            ? isSystemDarkThemed ? Definition_1.themeMap[ThemeVariant_type_1.ThemeVariant.HIGH_CONTRAST] : Definition_1.themeMap[ThemeVariant_type_1.ThemeVariant.LIGHT]
            : Definition_1.themeMap[themeVariant];
    }, [themeVariant, isSystemDarkThemed]);
    return react_1.default.useMemo(function () { return ({ themeVariant: themeVariant, theme: _theme }); }, [_theme, themeVariant]);
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var usePreferredThemeVariant_1 = __importDefault(require("./usePreferredThemeVariant"));
var Definition_1 = require("../Component/App/Stateless/Style/Theme/Definition");
exports.default = (function () {
    var themeVariant = (0, usePreferredThemeVariant_1.default)();
    var _theme = react_1.default.useMemo(function () { return Definition_1.themeMap[themeVariant]; }, [themeVariant]);
    return react_1.default.useMemo(function () { return ({ themeVariant: themeVariant, theme: _theme }); }, [_theme, themeVariant]);
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.themeMap = void 0;
var ThemeVariant_type_1 = require("../../../../../Types/ThemeVariant.type");
var LIGHT_theme_1 = __importDefault(require("./LIGHT.theme"));
var LEGACY_theme_1 = __importDefault(require("./LEGACY.theme"));
var COMIC_theme_1 = __importDefault(require("./COMIC.theme"));
var PIXEL_theme_1 = __importDefault(require("./PIXEL.theme"));
var HIGH_CONTRAST_theme_1 = __importDefault(require("./HIGH_CONTRAST.theme"));
exports.themeMap = (_a = {},
    _a[ThemeVariant_type_1.ThemeVariant.LIGHT] = LIGHT_theme_1.default,
    _a[ThemeVariant_type_1.ThemeVariant.LEGACY] = LEGACY_theme_1.default,
    _a[ThemeVariant_type_1.ThemeVariant.HIGH_CONTRAST] = HIGH_CONTRAST_theme_1.default,
    _a[ThemeVariant_type_1.ThemeVariant.AUTO_DETECT] = null,
    _a[ThemeVariant_type_1.ThemeVariant.COMIC] = COMIC_theme_1.default,
    _a[ThemeVariant_type_1.ThemeVariant.PIXEL] = PIXEL_theme_1.default,
    _a);
exports.default = LIGHT_theme_1.default;

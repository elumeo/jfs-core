"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadThemeVariant = exports.saveThemeVariant = exports.clippyFeature = exports.themeFeature = exports.SEPERATOR = void 0;
var ThemeVariant_type_1 = require("../../Types/ThemeVariant.type");
var Session = __importStar(require("./Session"));
exports.SEPERATOR = '-_-_--';
exports.themeFeature = 'preferred_theme';
exports.clippyFeature = 'preferred_clippy';
var saveThemeVariant = function (_a) {
    var userId = _a.userId, themeVariant = _a.themeVariant;
    Session.setItem([userId, exports.themeFeature].join(exports.SEPERATOR), themeVariant);
};
exports.saveThemeVariant = saveThemeVariant;
var loadThemeVariant = function (_a) {
    var userId = _a.userId;
    return (Session.getItem([userId, exports.themeFeature].join(exports.SEPERATOR)) || ThemeVariant_type_1.ThemeVariant.LIGHT);
};
exports.loadThemeVariant = loadThemeVariant;

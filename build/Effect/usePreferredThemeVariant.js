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
var ThemeVariant_type_1 = require("../Types/ThemeVariant.type");
var UserConfig = __importStar(require("../API/LOCAL_STORAGE/UserConfig"));
var Redux_1 = require("../Types/Redux");
exports.default = (function () {
    var userId = (0, Redux_1.useSelector)(function (state) { var _a, _b, _c; return (_c = (_b = (_a = state.Core.Session) === null || _a === void 0 ? void 0 : _a.sessionDTO) === null || _b === void 0 ? void 0 : _b.username) !== null && _c !== void 0 ? _c : ''; });
    var themeVariant = (0, Redux_1.useSelector)(function (state) { var _a, _b; return (_b = (_a = state.Core.LocalStorage) === null || _a === void 0 ? void 0 : _a[[userId, UserConfig.themeFeature].join(UserConfig.SEPERATOR)]) !== null && _b !== void 0 ? _b : ThemeVariant_type_1.ThemeVariant.LIGHT; });
    return themeVariant;
});

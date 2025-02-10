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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ThemeVariant_type_1 = require("../Types/ThemeVariant.type");
var UserConfig = __importStar(require("../API/LOCAL_STORAGE/UserConfig"));
var useSelector_1 = __importDefault(require("../Store/useSelector"));
var Selector = __importStar(require("../Store/Selector"));
exports.default = (function () {
    var userId = (0, useSelector_1.default)(Selector.Session.pickUsername);
    var themeVariant = (0, useSelector_1.default)(function (state) { var _a, _b; return (_b = (_a = state.Core.LocalStorage) === null || _a === void 0 ? void 0 : _a[[userId, UserConfig.themeFeature].join(UserConfig.SEPERATOR)]) !== null && _b !== void 0 ? _b : ThemeVariant_type_1.ThemeVariant.AUTO_DETECT; });
    return themeVariant;
});

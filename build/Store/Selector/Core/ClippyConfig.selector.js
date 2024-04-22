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
exports.pickConfigMessages = exports.pickClippyInterval = exports.pickClippyVariant = exports.pickClippyEnabled = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var Config = __importStar(require("./Configuration"));
var LocalStorage = __importStar(require("./LocalStorage.selector"));
var Session_1 = require("./Session");
var UserConfig = __importStar(require("../../../API/LOCAL_STORAGE/UserConfig"));
exports.pickClippyEnabled = (0, toolkit_1.createSelector)(Config.pickClippyConfig, function (config) { return config === null || config === void 0 ? void 0 : config.enabled; });
exports.pickClippyVariant = (0, toolkit_1.createSelector)([LocalStorage.pickState, Session_1.pickUsername], function (storage, userId) {
    var key = [userId, UserConfig.clippyFeature].join(UserConfig.SEPERATOR);
    return (storage[key]);
});
exports.pickClippyInterval = (0, toolkit_1.createSelector)(Config.pickClippyConfig, function (config) { return config === null || config === void 0 ? void 0 : config.interval; });
exports.pickConfigMessages = (0, toolkit_1.createSelector)(Config.pickClippyConfig, function (config) { return config === null || config === void 0 ? void 0 : config.messages; });

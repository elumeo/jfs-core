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
var react_1 = __importStar(require("react"));
var ClearButton_1 = __importDefault(require("../SelectClearButton/ClearButton"));
var core_1 = require("@material-ui/core");
var EndAdornment = function (_a) {
    var endAdornment = _a.endAdornment, showClearButton = _a.showClearButton, _b = _a.multiple, multiple = _b === void 0 ? false : _b, _c = _a.clearButtonSize, clearButtonSize = _c === void 0 ? 'medium' : _c, _d = _a.clearIconSize, clearIconSize = _d === void 0 ? 'medium' : _d, _e = _a.disabled, disabled = _e === void 0 ? false : _e, onClickClearButton = _a.onClickClearButton;
    return react_1.default.createElement(core_1.InputAdornment, { position: 'end' },
        endAdornment && endAdornment.props.children,
        showClearButton && react_1.default.createElement(ClearButton_1.default, { multiple: multiple, size: clearButtonSize, iconSize: clearIconSize, disabled: disabled, onClick: onClickClearButton }));
};
exports.default = (0, react_1.memo)(EndAdornment);

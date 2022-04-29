"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var AdapterMoment_1 = require("@mui/x-date-pickers/AdapterMoment");
var LocalizationProvider_1 = require("@mui/x-date-pickers/LocalizationProvider");
var Picker = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(LocalizationProvider_1.LocalizationProvider, { dateAdapter: AdapterMoment_1.AdapterMoment }, children));
};
exports.default = Picker;

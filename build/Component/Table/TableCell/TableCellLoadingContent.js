"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var lab_1 = require("@mui/lab");
var TableCellLoadingContent = function () { return react_1.default.createElement(lab_1.Skeleton, { variant: 'text', width: '100%', height: '100%', animation: 'wave' }); };
exports.default = TableCellLoadingContent;

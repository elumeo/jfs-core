"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@mui/material");
var react_1 = __importDefault(require("react"));
var Loading = function () { return react_1.default.createElement(material_1.Skeleton, { variant: 'text', width: '100%', height: '100%', animation: 'wave' }); };
exports.default = Loading;

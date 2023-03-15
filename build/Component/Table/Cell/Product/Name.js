"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var nameStyles = {
    display: '-webkit-box',
    overflow: 'hidden',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: "3",
};
var Name = function (_a) {
    var name = _a.name;
    return react_1.default.createElement(material_1.Box, null,
        react_1.default.createElement(material_1.Typography, { sx: nameStyles, fontWeight: 600 }, name));
};
exports.default = Name;

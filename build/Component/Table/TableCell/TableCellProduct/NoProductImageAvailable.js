"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@mui/material");
var colors_1 = require("@mui/material/colors");
var Definition_1 = __importDefault(require("../../../App/Stateless/Style/Theme/Definition"));
var react_1 = __importDefault(require("react"));
var styles = {
    width: Definition_1.default.spacing(10),
    height: Definition_1.default.spacing(10),
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: colors_1.grey['100'],
    userSelect: 'none',
    cursor: 'pointer',
};
var NoProductImageAvailable = function (_a) {
    var _b = _a.onClick, onClick = _b === void 0 ? null : _b;
    return react_1.default.createElement(material_1.Box, { sx: styles, onClick: onClick }, "No Image available");
};
exports.default = NoProductImageAvailable;

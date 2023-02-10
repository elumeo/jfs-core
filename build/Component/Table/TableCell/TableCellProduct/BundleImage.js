"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@mui/material");
var colors_1 = require("@mui/material/colors");
var Definition_1 = __importDefault(require("../../../App/Stateless/Style/Theme/Definition"));
var react_1 = __importDefault(require("react"));
var bundleBoxStyles = {
    width: Definition_1.default.spacing(10),
    height: Definition_1.default.spacing(10),
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: colors_1.grey === null || colors_1.grey === void 0 ? void 0 : colors_1.grey[100],
    userSelect: 'none',
    cursor: 'pointer',
};
var BundleImage = function () {
    return react_1.default.createElement(material_1.Box, { sx: bundleBoxStyles }, "Product Bundle");
};
exports.default = BundleImage;

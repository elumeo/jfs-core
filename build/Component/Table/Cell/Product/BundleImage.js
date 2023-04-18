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
var material_1 = require("@mui/material");
var colors_1 = require("@mui/material/colors");
var Definition_1 = __importDefault(require("../../../App/Stateless/Style/Theme/Definition"));
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
var BundleImage = function () { return react_1.default.createElement(material_1.Box, { sx: bundleBoxStyles }, "Product Bundle"); };
exports.default = (0, react_1.memo)(BundleImage);

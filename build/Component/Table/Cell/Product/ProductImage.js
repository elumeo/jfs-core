"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@welldone-software/why-did-you-render/jsx-runtime");
var react_1 = require("react");
var NoProductImageAvailable_1 = __importDefault(require("./NoProductImageAvailable"));
var styles = { cursor: 'pointer' };
var ProductImage = function (_a) {
    var id = _a.id, _b = _a.mediaUri, mediaUri = _b === void 0 ? null : _b;
    return mediaUri ? (0, jsx_runtime_1.jsx)("img", { src: mediaUri, alt: id, style: styles }) : (0, jsx_runtime_1.jsx)(NoProductImageAvailable_1.default, {});
};
exports.default = (0, react_1.memo)(ProductImage);

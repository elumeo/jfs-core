"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var BundleImage_1 = __importDefault(require("./BundleImage"));
var ProductImage_1 = __importDefault(require("./ProductImage"));
var Image = function (_a) {
    var _b = _a.id, id = _b === void 0 ? null : _b, _c = _a.mediaUris, mediaUris = _c === void 0 ? null : _c, _d = _a.isProductBundle, isProductBundle = _d === void 0 ? false : _d, _e = _a.onClick, onClick = _e === void 0 ? null : _e;
    return (react_1.default.createElement(material_1.ButtonBase, { onClick: onClick }, isProductBundle
        ? react_1.default.createElement(BundleImage_1.default, null)
        : react_1.default.createElement(ProductImage_1.default, { id: id, mediaUris: mediaUris })));
};
exports.default = Image;

"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@welldone-software/why-did-you-render/jsx-runtime");
var react_1 = require("react");
var material_1 = require("@mui/material");
var BundleImage_1 = __importDefault(require("./BundleImage"));
var ProductImage_1 = __importDefault(require("./ProductImage"));
var Image = function (_a) {
    var _b = _a.id, id = _b === void 0 ? null : _b, _c = _a.mediaUri, mediaUri = _c === void 0 ? null : _c, _d = _a.isProductBundle, isProductBundle = _d === void 0 ? false : _d, _e = _a.onClick, onClick = _e === void 0 ? null : _e;
    return (0, jsx_runtime_1.jsx)(material_1.ButtonBase, __assign({ onClick: onClick }, { children: isProductBundle ? (0, jsx_runtime_1.jsx)(BundleImage_1.default, {}) : (0, jsx_runtime_1.jsx)(ProductImage_1.default, { id: id, mediaUri: mediaUri }) }));
};
exports.default = (0, react_1.memo)(Image);

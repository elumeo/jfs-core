"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var NoProductImageAvailable_1 = __importDefault(require("./NoProductImageAvailable"));
var styles = { cursor: 'pointer' };
var ProductImage = function (_a) {
    var id = _a.id, _b = _a.mediaUris, mediaUris = _b === void 0 ? [] : _b, _c = _a.onClick, onClick = _c === void 0 ? null : _c;
    var mediaUri = mediaUris.length > 0 ? mediaUris.find(function (mediaUri) { return mediaUri.productId === id; }) : undefined;
    return mediaUri !== undefined
        ? react_1.default.createElement("img", { src: mediaUri.uri, alt: id, style: styles, onClick: onClick })
        : react_1.default.createElement(NoProductImageAvailable_1.default, { onClick: onClick });
};
exports.default = (0, react_1.memo)(ProductImage);

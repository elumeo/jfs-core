"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var NoProductImageAvailable_1 = __importDefault(require("./NoProductImageAvailable"));
var styles = { cursor: 'pointer' };
var ProductImage = function (_a) {
    var id = _a.id, _b = _a.mediaUris, mediaUris = _b === void 0 ? [] : _b;
    var mediaUri = react_1.default.useMemo(function () { var _a; return (_a = mediaUris.find(function (_mediaUri) { return (_mediaUri === null || _mediaUri === void 0 ? void 0 : _mediaUri.productId) === id && !!(_mediaUri === null || _mediaUri === void 0 ? void 0 : _mediaUri.uri); })) === null || _a === void 0 ? void 0 : _a.uri; }, [id, mediaUris]);
    return mediaUri
        ? react_1.default.createElement("img", { src: mediaUri, alt: id, style: styles })
        : react_1.default.createElement(NoProductImageAvailable_1.default, null);
};
exports.default = ProductImage;

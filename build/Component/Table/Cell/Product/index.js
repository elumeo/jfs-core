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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var Image_1 = __importDefault(require("./Image"));
var Details_1 = __importDefault(require("./Details"));
var Attributes_1 = __importDefault(require("../../../Table/Cell/Product/Attributes"));
var Loading_1 = __importDefault(require("../../../Table/Cell/Loading"));
var Root_1 = __importDefault(require("../../../Table/Cell/Root"));
var Product = function (_a) {
    var _b = _a.id, id = _b === void 0 ? null : _b, _c = _a.rowIndex, rowIndex = _c === void 0 ? null : _c, _d = _a.mediaUris, mediaUris = _d === void 0 ? null : _d, _e = _a.name, name = _e === void 0 ? null : _e, _f = _a.productType, productType = _f === void 0 ? null : _f, _g = _a.inStockPool, inStockPool = _g === void 0 ? false : _g, _h = _a.hasNoTvLock, hasNoTvLock = _h === void 0 ? false : _h, _j = _a.isProductBundle, isProductBundle = _j === void 0 ? false : _j, _k = _a.onClick, onClick = _k === void 0 ? null : _k, rest = __rest(_a, ["id", "rowIndex", "mediaUris", "name", "productType", "inStockPool", "hasNoTvLock", "isProductBundle", "onClick"]);
    var handleOnClick = react_1.default.useCallback(function () { return onClick(id, rowIndex); }, [onClick, id, rowIndex]);
    return react_1.default.createElement(Root_1.default, __assign({}, rest),
        id && react_1.default.createElement(material_1.Stack, { direction: 'row', maxHeight: '100%', spacing: 1, maxWidth: 'inherit', width: '100%' },
            react_1.default.createElement(Image_1.default, { onClick: handleOnClick, isProductBundle: isProductBundle, id: id, mediaUris: mediaUris }),
            react_1.default.createElement(Details_1.default, { onClick: handleOnClick, id: id, name: name }),
            react_1.default.createElement(Attributes_1.default, { productType: productType, hasNoTvLock: hasNoTvLock, inStockPool: inStockPool })),
        id === null && react_1.default.createElement(Loading_1.default, null));
};
exports.default = Product;

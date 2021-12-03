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
var react_1 = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var Image_1 = __importDefault(require("./Image"));
var Details_1 = __importDefault(require("./Details"));
var TableCell_1 = require("../../../Table/TableCell");
var TableCellProduct = function (_a) {
    var _b = _a.id, id = _b === void 0 ? null : _b, _c = _a.mediaUris, mediaUris = _c === void 0 ? null : _c, _d = _a.name, name = _d === void 0 ? null : _d, _e = _a.productType, productType = _e === void 0 ? null : _e, _f = _a.inStockPool, inStockPool = _f === void 0 ? false : _f, _g = _a.hasNoTvLock, hasNoTvLock = _g === void 0 ? false : _g, _h = _a.isProductBundle, isProductBundle = _h === void 0 ? false : _h, _j = _a.onClick, onClick = _j === void 0 ? null : _j, rest = __rest(_a, ["id", "mediaUris", "name", "productType", "inStockPool", "hasNoTvLock", "isProductBundle", "onClick"]);
    return react_1.default.createElement(TableCell_1.TableCellRoot, __assign({}, rest, { isNumeric: false }),
        id && react_1.default.createElement(core_1.Grid, { container: true },
            react_1.default.createElement(Image_1.default, { onClick: onClick, isProductBundle: isProductBundle, id: id, mediaUris: mediaUris }),
            react_1.default.createElement(Details_1.default, { onClick: onClick, id: id, productType: productType, name: name, inStockPool: inStockPool, hasNoTvLock: hasNoTvLock })),
        id === null && react_1.default.createElement(TableCell_1.TableCellLoadingContent, null));
};
exports.default = (0, react_1.memo)(TableCellProduct);

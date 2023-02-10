"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_intl_1 = require("react-intl");
var material_1 = require("@mui/material");
var containerStyle = {
    marginTop: .5,
    marginLeft: .5
};
var Attributes = function (_a) {
    var _b = _a.productType, productType = _b === void 0 ? null : _b, _c = _a.inStockPool, inStockPool = _c === void 0 ? false : _c, _d = _a.hasNoTvLock, hasNoTvLock = _d === void 0 ? false : _d;
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    var hasChip = productType !== null || inStockPool || hasNoTvLock;
    return hasChip && react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.Stack, { spacing: 1, sx: containerStyle },
            productType !== null && react_1.default.createElement(material_1.Chip, { size: 'small', label: formatMessage({ id: 'product.type.' + productType }) }),
            inStockPool && react_1.default.createElement(material_1.Chip, { size: 'small', label: 'StockPool' }),
            hasNoTvLock && react_1.default.createElement(material_1.Chip, { size: 'small', label: 'NoTv' }))) || react_1.default.createElement(react_1.default.Fragment, null);
};
exports.default = Attributes;

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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
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
    return hasChip && (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(material_1.Stack, __assign({ spacing: 1, sx: containerStyle }, { children: [productType !== null && (0, jsx_runtime_1.jsx)(material_1.Chip, { size: 'small', label: formatMessage({ id: 'product.type.' + productType }) }), inStockPool && (0, jsx_runtime_1.jsx)(material_1.Chip, { size: 'small', label: 'StockPool' }), hasNoTvLock && (0, jsx_runtime_1.jsx)(material_1.Chip, { size: 'small', label: 'NoTv' })] })) }) || (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
};
exports.default = (0, react_1.memo)(Attributes);

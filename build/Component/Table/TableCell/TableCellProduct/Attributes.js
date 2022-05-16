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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_intl_1 = require("react-intl");
var core_1 = require("@material-ui/core");
var containerStyle = {
    width: '100px',
    marginTop: '4px',
    marginLeft: '4px'
};
var Attributes = function (_a) {
    var _b = _a.productType, productType = _b === void 0 ? null : _b, _c = _a.inStockPool, inStockPool = _c === void 0 ? false : _c, _d = _a.hasNoTvLock, hasNoTvLock = _d === void 0 ? false : _d;
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    var hasChip = productType !== null || inStockPool || hasNoTvLock;
    return hasChip && react_1.default.createElement(core_1.Grid, { item: true },
        react_1.default.createElement(core_1.Grid, { container: true, spacing: 1, style: containerStyle },
            productType !== null && react_1.default.createElement(core_1.Grid, { item: true, xs: 12 },
                react_1.default.createElement(core_1.Chip, { size: 'small', label: formatMessage({ id: 'product.type.' + productType }) })),
            inStockPool && react_1.default.createElement(core_1.Grid, { item: true, xs: 12 },
                react_1.default.createElement(core_1.Chip, { size: 'small', label: 'StockPool' })),
            hasNoTvLock && react_1.default.createElement(core_1.Grid, { item: true, xs: 12 },
                react_1.default.createElement(core_1.Chip, { size: 'small', label: 'NoTv' })))) || react_1.default.createElement(react_1.default.Fragment, null);
};
exports.default = (0, react_1.memo)(Attributes);

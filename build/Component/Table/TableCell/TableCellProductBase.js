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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_intl_1 = require("react-intl");
var core_1 = require("@material-ui/core");
var _1 = require("./");
var TableCellProductBase = function (_a) {
    var _b = _a.id, id = _b === void 0 ? null : _b, _c = _a.mediaUri, mediaUri = _c === void 0 ? null : _c, _d = _a.name, name = _d === void 0 ? null : _d, _e = _a.productType, productType = _e === void 0 ? null : _e, _f = _a.inStockPool, inStockPool = _f === void 0 ? false : _f, _g = _a.hasNoTvLock, hasNoTvLock = _g === void 0 ? false : _g, _h = _a.isProductBundle, isProductBundle = _h === void 0 ? false : _h, _j = _a.bundleProductIds, bundleProductIds = _j === void 0 ? [] : _j, className = _a.className, _k = _a.onClick, onClick = _k === void 0 ? null : _k;
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    var hasChip = productType !== null || inStockPool || hasNoTvLock;
    var productImage;
    if (isProductBundle) {
        productImage = react_1.default.createElement("div", { className: 'virtualized-table__bundle-box', onClick: function () { return onClick !== null ? onClick(bundleProductIds) : null; } }, "Product Bundle");
    }
    else if (id !== null && mediaUri !== null) {
        productImage = react_1.default.createElement("img", { src: mediaUri, alt: id, className: 'virtualized-table__link', onClick: function () { return onClick !== null ? onClick([id]) : null; } });
    }
    return react_1.default.createElement(_1.TableCellRoot, null,
        id && react_1.default.createElement(core_1.Grid, { container: true, className: className },
            react_1.default.createElement(core_1.Grid, { item: true, className: 'virtualized-table__product-image-wrapper' }, productImage),
            react_1.default.createElement(core_1.Grid, { item: true, xs: true },
                react_1.default.createElement("div", { className: 'virtualized-table__name-outer-wrapper' },
                    react_1.default.createElement("div", { className: 'virtualized-table__name-inner-wrapper' },
                        react_1.default.createElement(core_1.Typography, { variant: 'body1', className: 'virtualized-table__name' }, name)),
                    hasChip && react_1.default.createElement(core_1.Grid, { container: true, spacing: 1 },
                        productType !== null && react_1.default.createElement(core_1.Grid, { item: true },
                            react_1.default.createElement(core_1.Chip, { size: 'small', label: formatMessage({ id: 'product.type.' + productType }) })),
                        inStockPool && react_1.default.createElement(core_1.Grid, { item: true },
                            react_1.default.createElement(core_1.Chip, { size: 'small', label: 'StockPool' })),
                        hasNoTvLock && react_1.default.createElement(core_1.Grid, { item: true },
                            react_1.default.createElement(core_1.Chip, { size: 'small', label: 'NoTv' }))),
                    react_1.default.createElement("div", { style: { marginTop: '2px' } }, id && (react_1.default.createElement(core_1.Button, { size: 'small', color: 'secondary', onClick: function () { return onClick !== null ? onClick(isProductBundle ? bundleProductIds : [id]) : null; } }, formatMessage({ id: 'product.details' }))))))),
        id === null && react_1.default.createElement(_1.TableCellLoadingContent, null));
};
exports.default = (0, react_1.memo)(TableCellProductBase);

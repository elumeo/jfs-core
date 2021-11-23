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
var styles_1 = require("@material-ui/styles");
var TableCellProduct = function (_a) {
    var _b = _a.id, id = _b === void 0 ? null : _b, _c = _a.mediaUri, mediaUri = _c === void 0 ? null : _c, _d = _a.name, name = _d === void 0 ? null : _d, _e = _a.productType, productType = _e === void 0 ? null : _e, _f = _a.inStockPool, inStockPool = _f === void 0 ? false : _f, _g = _a.hasNoTvLock, hasNoTvLock = _g === void 0 ? false : _g, _h = _a.isProductBundle, isProductBundle = _h === void 0 ? false : _h, _j = _a.bundleProductIds, bundleProductIds = _j === void 0 ? [] : _j, _k = _a.onClick, onClick = _k === void 0 ? null : _k;
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    var theme = (0, styles_1.useTheme)();
    var hasChip = productType !== null || inStockPool || hasNoTvLock;
    var productImageBundleStyle = (0, react_1.useMemo)(function () { return ({
        width: theme.spacing(10),
        height: theme.spacing(10),
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: theme.palette.grey['100'],
        userSelect: 'none',
        cursor: 'pointer'
    }); }, []);
    var productImageStyle = (0, react_1.useMemo)(function () { return ({ cursor: 'pointer' }); }, []);
    var productImageWrapperStyle = (0, react_1.useMemo)(function () { return ({ marginTop: 'auto', marginBottom: 'auto' }); }, []);
    var productNameOuterWrapperStyle = (0, react_1.useMemo)(function () { return ({
        marginLeft: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    }); }, []);
    var productNameInnerWrapperStyle = (0, react_1.useMemo)(function () { return ({ flex: 1 }); }, []);
    var productNameStyle = (0, react_1.useMemo)(function () { return ({
        fontWeight: theme.typography.fontWeightBold,
        whiteSpace: 'normal',
        display: '-webkit-box',
        overflow: 'hidden',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: productType !== null || inStockPool || hasNoTvLock ? 2 : 3
    }); }, [productType, inStockPool, hasNoTvLock]);
    var productImage = (0, react_1.useMemo)(function () {
        return isProductBundle
            ? react_1.default.createElement("div", { style: productImageBundleStyle, onClick: function () { return onClick !== null ? onClick(bundleProductIds) : null; } }, "Product Bundle")
            : react_1.default.createElement("img", { src: mediaUri, alt: id, style: productImageStyle, onClick: function () { return onClick !== null ? onClick([id]) : null; } });
    }, [isProductBundle]);
    return react_1.default.createElement(_1.TableCellRoot, null,
        id && react_1.default.createElement(core_1.Grid, { container: true },
            react_1.default.createElement(core_1.Grid, { item: true, style: productImageWrapperStyle }, productImage),
            react_1.default.createElement(core_1.Grid, { item: true, xs: true },
                react_1.default.createElement("div", { style: productNameOuterWrapperStyle },
                    react_1.default.createElement("div", { style: productNameInnerWrapperStyle },
                        react_1.default.createElement(core_1.Typography, { variant: 'body1', style: productNameStyle }, name)),
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
exports.default = (0, react_1.memo)(TableCellProduct);

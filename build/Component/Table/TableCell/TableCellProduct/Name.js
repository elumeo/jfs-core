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
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var nameWrapperStyles = { flex: 1 };
var Name = function (_a) {
    var name = _a.name, _b = _a.productType, productType = _b === void 0 ? null : _b, _c = _a.inStockPool, inStockPool = _c === void 0 ? false : _c, _d = _a.hasNoTvLock, hasNoTvLock = _d === void 0 ? false : _d;
    var theme = (0, styles_1.useTheme)();
    var nameStyles = (0, react_1.useMemo)(function () { return ({
        fontWeight: theme.typography.fontWeightBold,
        whiteSpace: 'normal',
        display: '-webkit-box',
        overflow: 'hidden',
        boxOrient: 'vertical',
        lineClamp: productType !== null || inStockPool || hasNoTvLock ? 2 : 3,
    }); }, [productType, inStockPool, hasNoTvLock]);
    return react_1.default.createElement("div", { style: nameWrapperStyles },
        react_1.default.createElement(core_1.Typography, { variant: 'body1', style: nameStyles }, name));
};
exports.default = (0, react_1.memo)(Name);

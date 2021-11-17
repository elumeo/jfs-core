"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
var TableCellProductBase_1 = __importDefault(require("./TableCellProductBase"));
var TableCellProduct = (0, styled_components_1.default)(TableCellProductBase_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .virtualized-table {\n    &__bundle-box {\n      width: ", ";\n      height: ", ";\n      text-align: center;\n      display: flex;\n      align-items: center;\n      background-color: ", ";\n      user-select: none;\n      cursor: pointer;\n    }\n\n    &__link {\n      cursor: pointer;\n    }\n\n    &__product-image-wrapper {\n      margin-top: auto;\n      margin-bottom: auto;\n    }\n\n    &__name-outer-wrapper {\n      margin-left: ", ";\n      display: flex;\n      flex-direction: column;\n      height: 100%;\n    }\n\n    &__name-inner-wrapper {\n      flex: 1;\n    }\n\n    &__name {\n      font-weight: ", ";\n      white-space: normal;\n      display: -webkit-box;\n      overflow: hidden;\n      -webkit-box-orient: vertical;\n      -webkit-line-clamp: ", ";\n    }\n  }\n"], ["\n  .virtualized-table {\n    &__bundle-box {\n      width: ", ";\n      height: ", ";\n      text-align: center;\n      display: flex;\n      align-items: center;\n      background-color: ", ";\n      user-select: none;\n      cursor: pointer;\n    }\n\n    &__link {\n      cursor: pointer;\n    }\n\n    &__product-image-wrapper {\n      margin-top: auto;\n      margin-bottom: auto;\n    }\n\n    &__name-outer-wrapper {\n      margin-left: ", ";\n      display: flex;\n      flex-direction: column;\n      height: 100%;\n    }\n\n    &__name-inner-wrapper {\n      flex: 1;\n    }\n\n    &__name {\n      font-weight: ", ";\n      white-space: normal;\n      display: -webkit-box;\n      overflow: hidden;\n      -webkit-box-orient: vertical;\n      -webkit-line-clamp: ", ";\n    }\n  }\n"])), function (props) { return props.theme.spacing(10); }, function (props) { return props.theme.spacing(10); }, function (props) { return props.theme.palette.grey['100']; }, function (_a) {
    var theme = _a.theme;
    return theme.spacing(1) + 'px';
}, function (_a) {
    var theme = _a.theme;
    return theme.typography.fontWeightBold;
}, function (_a) {
    var productType = _a.productType, inStockPool = _a.inStockPool, hasNoTvLock = _a.hasNoTvLock;
    return productType !== null || inStockPool || hasNoTvLock ? 2 : 3;
});
exports.default = TableCellProduct;
var templateObject_1;

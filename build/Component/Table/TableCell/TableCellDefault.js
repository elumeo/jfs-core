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
var TableCellDefaultBase_1 = __importDefault(require("../../Table/TableCell/TableCellDefaultBase"));
var TableCellDefault = (0, styled_components_1.default)(TableCellDefaultBase_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .virtualized-table {\n    &__content-ellipses {\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      overflow: hidden;\n    }\n    &__content-ellipses-lines {\n      overflow: hidden;\n      white-space: normal;\n      -webkit-box-orient: vertical;\n      -webkit-line-clamp: ", ";\n      display: -webkit-box;\n    }\n  }\n"], ["\n  .virtualized-table {\n    &__content-ellipses {\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      overflow: hidden;\n    }\n    &__content-ellipses-lines {\n      overflow: hidden;\n      white-space: normal;\n      -webkit-box-orient: vertical;\n      -webkit-line-clamp: ", ";\n      display: -webkit-box;\n    }\n  }\n"])), function (props) { var _a; return (_a = props.contentEllipseLines) !== null && _a !== void 0 ? _a : 4; });
exports.default = TableCellDefault;
var templateObject_1;

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
var TableCellRootBase_1 = __importDefault(require("../../Table/TableCell/TableCellRootBase"));
var react_1 = require("react");
var TableCellRoot = (0, styled_components_1.default)(TableCellRootBase_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: ", ";\n"], ["\n  height: ", ";\n"])), function (_a) {
    var _b = _a.rowHeight, rowHeight = _b === void 0 ? '100%' : _b;
    return rowHeight;
});
exports.default = (0, react_1.memo)(TableCellRoot);
var templateObject_1;

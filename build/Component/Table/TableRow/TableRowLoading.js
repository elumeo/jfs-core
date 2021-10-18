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
var TableRowLoadingBase_1 = __importDefault(require("../../Table/TableRow/TableRowLoadingBase"));
var TableRowLoading = (0, styled_components_1.default)(TableRowLoadingBase_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  text-align: center;\n  margin-top: ", ";\n"], ["\n  text-align: center;\n  margin-top: ", ";\n"])), function (props) { return props.theme.spacing(2) + 'px'; });
exports.default = TableRowLoading;
var templateObject_1;

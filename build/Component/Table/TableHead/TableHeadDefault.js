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
var TableHeadDefaultBase_1 = __importDefault(require("../../Table/TableHead/TableHeadDefaultBase"));
var TableHeadDefault = (0, styled_components_1.default)(TableHeadDefaultBase_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .MuiTableSortLabel-root {\n    &:hover {\n      color: ", ";\n    }\n  }\n\n  .MuiTableSortLabel-icon {\n    align-self: flex-start;\n  }\n"], ["\n  .MuiTableSortLabel-root {\n    &:hover {\n      color: ", ";\n    }\n  }\n\n  .MuiTableSortLabel-icon {\n    align-self: flex-start;\n  }\n"])), function (props) { return props.theme.palette.secondary.main; });
exports.default = TableHeadDefault;
var templateObject_1;

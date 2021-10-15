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
var index_1 = require("../Table/index");
var StyledVirtualizedTable = (0, styled_components_1.default)(index_1.VirtualizedTable)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border-collapse: separate;\n\n    & .ReactVirtualized__Table__headerRow {\n      flip: false;\n      padding-right: ", ";\n      background-color: ", ";\n      overflow: ", " !important;\n    }\n\n    .virtualized-table {\n      &__cell {\n        flex: 1;\n        padding: ", ";\n        max-width: 100%;\n      }\n\n      &__flex-container {\n        display: flex;\n        align-items: center;\n        box-sizing: border-box;\n        height: 100%;\n      }\n\n      &__grid {\n        outline: none;\n      }\n\n      &__row {\n        outline: none;\n        direction: inherit;\n\n        &--hover {\n          &:hover {\n            background-color: ", ";\n          }\n        }\n      }\n\n      &--click {\n        cursor: pointer;\n      }\n\n      &--no-click {\n        cursor: initial;\n      }\n\n      &--visually-hidden {\n        border: 0;\n        clip: rect(0 0 0 0);\n        height: 1px;\n        margin: -1px;\n        overflow: hidden;\n        padding: 0;\n        position: absolute;\n        top: 20px;\n        width: 1px;\n      }\n    }\n"], ["\n    border-collapse: separate;\n\n    & .ReactVirtualized__Table__headerRow {\n      flip: false;\n      padding-right: ", ";\n      background-color: ", ";\n      overflow: ", " !important;\n    }\n\n    .virtualized-table {\n      &__cell {\n        flex: 1;\n        padding: ", ";\n        max-width: 100%;\n      }\n\n      &__flex-container {\n        display: flex;\n        align-items: center;\n        box-sizing: border-box;\n        height: 100%;\n      }\n\n      &__grid {\n        outline: none;\n      }\n\n      &__row {\n        outline: none;\n        direction: inherit;\n\n        &--hover {\n          &:hover {\n            background-color: ", ";\n          }\n        }\n      }\n\n      &--click {\n        cursor: pointer;\n      }\n\n      &--no-click {\n        cursor: initial;\n      }\n\n      &--visually-hidden {\n        border: 0;\n        clip: rect(0 0 0 0);\n        height: 1px;\n        margin: -1px;\n        overflow: hidden;\n        padding: 0;\n        position: absolute;\n        top: 20px;\n        width: 1px;\n      }\n    }\n"])), function (props) { return props.theme.direction === 'rtl' ? '0 !important' : 'initial'; }, function (props) { return props.theme.palette.background.paper; }, function (props) { return props.headerOverflow; }, function (props) { return props.theme.spacing(1); }, function (props) { return props.theme.palette.grey[200]; });
exports.default = StyledVirtualizedTable;
var templateObject_1;

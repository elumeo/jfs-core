"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@mui/material");
var react_1 = __importDefault(require("react"));
var react_intl_1 = require("react-intl");
var styles = {
    textAlign: 'center',
    mt: 2
};
var TableRowNoResults = function () {
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    return react_1.default.createElement(material_1.Box, { sx: styles }, formatMessage({ id: 'table.noResults' }));
};
exports.default = TableRowNoResults;

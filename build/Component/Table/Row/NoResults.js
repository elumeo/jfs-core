"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var react_intl_1 = require("react-intl");
var NoResults = function () {
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    return react_1.default.createElement("caption", null,
        react_1.default.createElement(material_1.Typography, { variant: 'body1', textAlign: 'center' }, formatMessage({ id: 'table.noResults' })));
};
exports.default = NoResults;

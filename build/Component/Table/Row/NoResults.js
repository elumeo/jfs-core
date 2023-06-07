"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var react_intl_1 = require("react-intl");
var NoResults = function () {
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    return (0, jsx_runtime_1.jsx)("caption", { children: (0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ variant: 'body1', textAlign: 'center' }, { children: formatMessage({ id: 'table.noResults' }) })) });
};
exports.default = NoResults;

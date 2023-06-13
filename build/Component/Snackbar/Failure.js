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
var jsx_runtime_1 = require("@welldone-software/why-did-you-render/jsx-runtime");
var material_1 = require("@mui/material");
var system_1 = require("@mui/system");
var react_intl_1 = require("react-intl");
var Failure = function (_a) {
    var title = _a.title, details = _a.details;
    var intl = (0, react_intl_1.useIntl)();
    return ((0, jsx_runtime_1.jsxs)(system_1.Stack, { children: [(0, jsx_runtime_1.jsxs)(material_1.Typography, __assign({ component: 'u' }, { children: [intl.formatMessage({ id: 'app.error' }), ":"] })), details, title && (0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ sx: { fontSize: 'x-small' } }, { children: title }))] }));
};
exports.default = Failure;

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
var react_1 = require("react");
var react_intl_1 = require("react-intl");
var material_1 = require("@mui/material");
var styles = {
    textTransform: 'initial',
    width: 'fit-content',
    p: .5,
    lineHeight: 1
};
var Button = function (_a) {
    var _b = _a.id, id = _b === void 0 ? null : _b, onClick = _a.onClick;
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    return id && (0, jsx_runtime_1.jsx)(material_1.Button, __assign({ color: 'secondary', onClick: onClick, sx: styles }, { children: formatMessage({ id: 'product.details' }) }));
};
exports.default = (0, react_1.memo)(Button);

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
var material_1 = require("@mui/material");
var nameStyles = {
    display: '-webkit-box',
    overflow: 'hidden',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: "3",
};
var Name = function (_a) {
    var name = _a.name;
    return (0, jsx_runtime_1.jsx)(material_1.Box, { children: (0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ sx: nameStyles, fontWeight: 600 }, { children: name })) });
};
exports.default = (0, react_1.memo)(Name);

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
var icons_material_1 = require("@mui/icons-material");
var IconButtonClear = function (_a) {
    var onClear = _a.onClear;
    return (0, jsx_runtime_1.jsx)(material_1.IconButton, __assign({ sx: { position: 'absolute', zIndex: 1, right: 24, top: 'calc(50% - 14px)' }, color: 'secondary', size: 'small', onClick: onClear }, { children: (0, jsx_runtime_1.jsx)(icons_material_1.Clear, { onMouseDown: function (event) { return event.stopPropagation(); }, fontSize: 'small' }) }));
};
exports.default = IconButtonClear;

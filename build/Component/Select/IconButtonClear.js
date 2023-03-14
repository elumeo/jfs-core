"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
var react_1 = __importDefault(require("react"));
var IconButtonClear = function (_a) {
    var onClear = _a.onClear;
    return react_1.default.createElement(material_1.IconButton, { sx: { position: 'absolute', zIndex: 1, right: 24, top: 'calc(50% - 14px)' }, color: 'secondary', size: 'small', onClick: onClear },
        react_1.default.createElement(icons_material_1.Clear, { onMouseDown: function (event) { return event.stopPropagation(); }, fontSize: 'small' }));
};
exports.default = IconButtonClear;

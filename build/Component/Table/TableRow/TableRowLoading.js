"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var sx = {
    textAlign: 'center',
    mt: 2
};
var TableRowLoading = function () {
    return react_1.default.createElement(material_1.TableRow, { sx: sx },
        react_1.default.createElement(material_1.CircularProgress, null));
};
exports.default = TableRowLoading;

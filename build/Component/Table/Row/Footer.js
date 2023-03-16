"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var Footer = react_1.default.forwardRef(function (_a, ref) {
    var children = _a.children;
    return react_1.default.createElement(material_1.TableFooter, { ref: ref },
        react_1.default.createElement(material_1.TableRow, { sx: { background: 'white' } },
            react_1.default.createElement(material_1.TableCell, { colSpan: 100, align: 'center' }, children)));
});
exports.default = Footer;

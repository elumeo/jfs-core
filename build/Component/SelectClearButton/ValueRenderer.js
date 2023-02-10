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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@mui/material");
var react_1 = __importDefault(require("react"));
var ValueRenderer = function (_a) {
    var renderAsChip = _a.renderAsChip, maxValuesToDisplayInInput = _a.maxValuesToDisplayInInput, values = _a.values, labelsByValue = _a.labelsByValue, canUnselect = _a.canUnselect, unselect = _a.unselect, props = __rest(_a, ["renderAsChip", "maxValuesToDisplayInInput", "values", "labelsByValue", "canUnselect", "unselect"]);
    return renderAsChip
        ? react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(material_1.Stack, { direction: 'row', spacing: 1 },
                values.map(function (v, i) {
                    return !maxValuesToDisplayInInput || i < maxValuesToDisplayInInput
                        ?
                            (react_1.default.createElement(material_1.Chip, __assign({ key: "select-chip-".concat(i), label: labelsByValue[v], size: 'small', onMouseDown: function (event) { return event.stopPropagation(); } }, props, { onDelete: canUnselect
                                    ? function () { return unselect(v); }
                                    : undefined })))
                        : null;
                }),
                values.length > maxValuesToDisplayInInput
                    ? react_1.default.createElement(material_1.Typography, null,
                        "+",
                        (values.length - maxValuesToDisplayInInput)) : null))
        : react_1.default.createElement(react_1.default.Fragment, null, values.map(function (v) { return labelsByValue[v]; }).join(', '));
};
exports.default = ValueRenderer;

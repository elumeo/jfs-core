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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@welldone-software/why-did-you-render/jsx-runtime");
var react_1 = require("react");
var material_1 = require("@mui/material");
var Cancel_1 = __importDefault(require("@mui/icons-material/Cancel"));
var IconButtonClear_1 = __importDefault(require("Component/Select/IconButtonClear"));
var ValueRenderer = function (_a) {
    var selected = _a.selected, labelsByValue = _a.labelsByValue, onUnselect = _a.onUnselect, onClear = _a.onClear, maxValuesShown = _a.maxValuesShown, isInClearableState = _a.isInClearableState;
    var renderedValue;
    if (Array.isArray(selected)) {
        var selectedItems = __spreadArray([], selected, true);
        if (maxValuesShown) {
            selectedItems = selectedItems.slice(0, maxValuesShown);
        }
        renderedValue = (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [selectedItems.map(function (value) { return (0, jsx_runtime_1.jsx)(material_1.Chip, { label: labelsByValue[value], onDelete: function () { return onUnselect(value); }, deleteIcon: (0, jsx_runtime_1.jsx)(Cancel_1.default, { onMouseDown: function (event) { return event.stopPropagation(); } }) }, value); }), Array.isArray(selected) && selectedItems.length < selected.length &&
                    (0, jsx_runtime_1.jsxs)(material_1.Typography, __assign({ fontSize: '1.1rem', pt: '6px' }, { children: ["+", selected.length - selectedItems.length] }))] });
    }
    else {
        renderedValue = labelsByValue[selected];
    }
    return (0, jsx_runtime_1.jsxs)(material_1.Box, __assign({ sx: { display: 'flex', flexWrap: 'wrap', gap: 0.5 } }, { children: [renderedValue, isInClearableState && (0, jsx_runtime_1.jsx)(IconButtonClear_1.default, { onClear: onClear })] }));
};
exports.default = (0, react_1.memo)(ValueRenderer);

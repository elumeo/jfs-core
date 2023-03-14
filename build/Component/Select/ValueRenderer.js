"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var Cancel_1 = __importDefault(require("@mui/icons-material/Cancel"));
var IconButtonClear_1 = __importDefault(require("../Select/IconButtonClear"));
var ValueRenderer = function (_a) {
    var selected = _a.selected, labelsByValue = _a.labelsByValue, onUnselect = _a.onUnselect, onClear = _a.onClear, maxValuesShown = _a.maxValuesShown, isInClearableState = _a.isInClearableState;
    var renderedValue;
    if (Array.isArray(selected)) {
        var selectedItems = __spreadArray([], selected, true);
        if (maxValuesShown) {
            selectedItems = selectedItems.slice(0, maxValuesShown);
        }
        renderedValue = react_1.default.createElement(react_1.default.Fragment, null,
            selectedItems.map(function (value) { return react_1.default.createElement(material_1.Chip, { key: value, label: labelsByValue[value], onDelete: function () { return onUnselect(value); }, deleteIcon: react_1.default.createElement(Cancel_1.default, { onMouseDown: function (event) { return event.stopPropagation(); } }) }); }),
            Array.isArray(selected) && selectedItems.length < selected.length &&
                react_1.default.createElement(material_1.Typography, { fontSize: '1.1rem', pt: '6px' },
                    "+",
                    selected.length - selectedItems.length));
    }
    else {
        renderedValue = labelsByValue[selected];
    }
    return react_1.default.createElement(material_1.Box, { sx: { display: 'flex', flexWrap: 'wrap', gap: 0.5 } },
        renderedValue,
        isInClearableState && react_1.default.createElement(IconButtonClear_1.default, { onClear: onClear }));
};
exports.default = (0, react_1.memo)(ValueRenderer);

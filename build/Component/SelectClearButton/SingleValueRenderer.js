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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var ChipValue_1 = __importDefault(require("../SelectClearButton/ChipValue"));
var SingleValueRenderer = function (_a) {
    var setValue = _a.setValue, valueChipProps = _a.valueChipProps, selected = _a.selected, onDeleteItem = _a.onDeleteItem, _b = _a.renderValueAsChip, renderValueAsChip = _b === void 0 ? false : _b;
    var handleChipOnDelete = (0, react_1.useCallback)(function (selectedItem) { return function (event) {
        event.stopPropagation();
        onDeleteItem !== undefined ? onDeleteItem(selectedItem) : setValue('');
    }; }, []);
    return react_1.default.createElement(react_1.default.Fragment, null, renderValueAsChip
        ? react_1.default.createElement(ChipValue_1.default, __assign({ key: 'select-clear-button-single-value-renderer-chip-value-' + selected, onDelete: handleChipOnDelete(selected), value: selected }, valueChipProps))
        : selected);
};
exports.default = (0, react_1.memo)(SingleValueRenderer);

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
var core_1 = require("@material-ui/core");
var ChipValue_1 = __importDefault(require("../SelectClearButton/ChipValue"));
var MultipleValueRenderer = function (_a) {
    var value = _a.value, setValue = _a.setValue, valueChipProps = _a.valueChipProps, selected = _a.selected, onDeleteItem = _a.onDeleteItem, _b = _a.maxValuesToDisplayInInput, maxValuesToDisplayInInput = _b === void 0 ? 1 : _b, _c = _a.renderValueAsChip, renderValueAsChip = _c === void 0 ? false : _c;
    var handleChipOnDelete = (0, react_1.useCallback)(function (selectedItem) { return function (event) {
        var _a;
        event.stopPropagation();
        onDeleteItem !== undefined
            ? onDeleteItem((_a = value.find(function (value) { return value === selectedItem; })) !== null && _a !== void 0 ? _a : null)
            : setValue(value.filter(function (value) { return value !== selectedItem; }));
    }; }, [selected, value]);
    return react_1.default.createElement(core_1.Grid, { container: true, spacing: 1, alignItems: 'center' },
        selected
            .filter(function (label, index) { return index < maxValuesToDisplayInInput; })
            .map(function (selectedItem, index) { return renderValueAsChip
            ? react_1.default.createElement(core_1.Grid, { item: true, key: 'select-clear-button-multiple-value-renderer-chip-value-' + selected + '-' + index },
                react_1.default.createElement(ChipValue_1.default, __assign({ onDelete: handleChipOnDelete(selectedItem), value: selectedItem }, valueChipProps)))
            : (index > 0 ? ', ' + selectedItem : selectedItem); }),
        selected.length > maxValuesToDisplayInInput && react_1.default.createElement(core_1.Grid, { item: true },
            " +",
            (selected.length - maxValuesToDisplayInInput)));
};
exports.default = (0, react_1.memo)(MultipleValueRenderer);

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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var MultipleValueRenderer_1 = __importDefault(require("../SelectClearButton/MultipleValueRenderer"));
var SingleValueRenderer_1 = __importDefault(require("../SelectClearButton/SingleValueRenderer"));
var ValueRenderer = function (_a) {
    var multiple = _a.multiple, setValue = _a.setValue, valueChipProps = _a.valueChipProps, selectedValue = _a.selectedValue, onDeleteItem = _a.onDeleteItem, _b = _a.maxValuesToDisplayInInput, maxValuesToDisplayInInput = _b === void 0 ? 1 : _b, _c = _a.renderValueAsChip, renderValueAsChip = _c === void 0 ? false : _c;
    return react_1.default.createElement(react_1.default.Fragment, null,
        multiple === true && react_1.default.createElement(MultipleValueRenderer_1.default, { selectedValue: selectedValue, setValue: setValue, renderValueAsChip: renderValueAsChip, maxValuesToDisplayInInput: maxValuesToDisplayInInput, onDeleteItem: onDeleteItem, valueChipProps: valueChipProps }),
        multiple !== true && react_1.default.createElement(SingleValueRenderer_1.default, { renderValueAsChip: renderValueAsChip, valueChipProps: valueChipProps, setValue: setValue, onDeleteItem: onDeleteItem, selectedValue: selectedValue }));
};
exports.default = (0, react_1.memo)(ValueRenderer);

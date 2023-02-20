"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var TableCellRoot_1 = __importDefault(require("./TableCellRoot"));
var checkboxStyles = { padding: 1 };
var TableCellSelect = function (_a) {
    var value = _a.value, checked = _a.checked, _b = _a.disabled, disabled = _b === void 0 ? false : _b, onChange = _a.onChange, _c = _a.id, id = _c === void 0 ? 'table-cell-select-' : _c, _d = _a.name, name = _d === void 0 ? 'table-cell-select[]' : _d, height = _a.height;
    return (react_1.default.createElement(TableCellRoot_1.default, { padding: 'checkbox', align: 'center', size: 'small', height: height },
        react_1.default.createElement(material_1.Checkbox, { sx: checkboxStyles, size: 'small', id: id + value, name: name, value: value !== null && value !== void 0 ? value : '', checked: checked, disabled: disabled, onChange: onChange })));
};
exports.default = TableCellSelect;

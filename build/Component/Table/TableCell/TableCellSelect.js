"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var TableCellRoot_1 = __importDefault(require("./TableCellRoot"));
var checkboxStyles = { padding: '7px' };
var TableCellSelect = function (_a) {
    var value = _a.value, checked = _a.checked, _b = _a.disabled, disabled = _b === void 0 ? false : _b, onChange = _a.onChange, _c = _a.id, id = _c === void 0 ? 'table-cell-select-' : _c, _d = _a.name, name = _d === void 0 ? 'table-cell-select[]' : _d;
    return react_1.default.createElement(TableCellRoot_1.default, null,
        react_1.default.createElement(core_1.Checkbox, { style: checkboxStyles, size: 'small', id: id + value, name: name, value: value !== null && value !== void 0 ? value : '', checked: checked, disabled: disabled, onChange: onChange }));
};
exports.default = (0, react_1.memo)(TableCellSelect);

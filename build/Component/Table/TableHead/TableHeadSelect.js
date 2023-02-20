"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var Definition_1 = __importDefault(require("../../App/Stateless/Style/Theme/Definition"));
var loadingStyles = { ml: 1.5, mr: 1.5 };
var checkboxStyles = { p: 1 };
var getSx = function (height) {
    if (height === void 0) { height = 48; }
    return ({
        height: height + 'px',
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: Definition_1.default.spacing(0.5),
        maxWidth: '100%'
    });
};
var TableHeadSelect = function (_a) {
    var _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.loading, loading = _c === void 0 ? false : _c, checked = _a.checked, _d = _a.height, height = _d === void 0 ? 48 : _d, _e = _a.onChange, onChange = _e === void 0 ? null : _e, _f = _a.id, id = _f === void 0 ? 'product-select-all' : _f, _g = _a.name, name = _g === void 0 ? 'product-select[]' : _g, _h = _a.value, value = _h === void 0 ? '###all###' : _h;
    return (react_1.default.createElement(material_1.TableCell, { component: 'div', variant: 'head', sx: getSx(height) }, loading
        ? (react_1.default.createElement(material_1.Box, { sx: loadingStyles },
            react_1.default.createElement(material_1.CircularProgress, { size: 16 })))
        : (react_1.default.createElement(material_1.Checkbox, { sx: checkboxStyles, size: 'small', disabled: disabled, id: id, name: name, value: value, checked: checked, onChange: onChange }))));
};
exports.default = TableHeadSelect;

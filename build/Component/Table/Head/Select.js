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
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var loadingStyles = { ml: 1.5, mr: 1.5 };
var checkboxStyles = { p: 0 };
var Select = function (_a) {
    var _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.loading, loading = _c === void 0 ? false : _c, checked = _a.checked, _d = _a.onChange, onChange = _d === void 0 ? null : _d, id = _a.id, name = _a.name, value = _a.value, rest = __rest(_a, ["disabled", "loading", "checked", "onChange", "id", "name", "value"]);
    return (react_1.default.createElement(material_1.TableCell, __assign({ variant: 'head' }, rest), loading
        ? react_1.default.createElement(material_1.Box, { sx: loadingStyles },
            react_1.default.createElement(material_1.CircularProgress, { size: 16 }))
        : react_1.default.createElement(material_1.Checkbox, { sx: checkboxStyles, color: 'secondary', size: 'small', disabled: disabled, id: id, name: name, value: value, checked: checked, onChange: onChange })));
};
exports.default = Select;

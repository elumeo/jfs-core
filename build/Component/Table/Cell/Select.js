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
var jsx_runtime_1 = require("@welldone-software/why-did-you-render/jsx-runtime");
var react_1 = require("react");
var material_1 = require("@mui/material");
var Root_1 = __importDefault(require("./Root"));
var Select = function (_a) {
    var value = _a.value, checked = _a.checked, _b = _a.disabled, disabled = _b === void 0 ? false : _b, onChange = _a.onChange, _c = _a.id, id = _c === void 0 ? 'table-cell-select-' : _c, _d = _a.name, name = _d === void 0 ? 'table-cell-select[]' : _d, height = _a.height, slotProps = _a.slotProps, rest = __rest(_a, ["value", "checked", "disabled", "onChange", "id", "name", "height", "slotProps"]);
    return (0, jsx_runtime_1.jsx)(Root_1.default, __assign({ padding: 'none', align: 'center', size: 'small', height: height }, rest, { children: (0, jsx_runtime_1.jsx)(material_1.Checkbox, __assign({ size: 'small', color: 'secondary', id: id + value, name: name, value: value !== null && value !== void 0 ? value : '', checked: checked, disabled: disabled, onChange: onChange }, slotProps === null || slotProps === void 0 ? void 0 : slotProps.checkbox)) }));
};
exports.default = (0, react_1.memo)(Select);

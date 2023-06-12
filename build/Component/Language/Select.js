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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Select_1 = __importDefault(require("@mui/material/Select"));
var MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
var All_json_1 = __importDefault(require("./All.json"));
var Select = function (_a) {
    var value = _a.value, onChange = _a.onChange;
    return ((0, jsx_runtime_1.jsx)(Select_1.default, __assign({ id: 'settings__language-select', fullWidth: true, value: value, onChange: function (event) { return onChange(event.target.value); } }, { children: All_json_1.default.map(function (item) { return ((0, jsx_runtime_1.jsx)(MenuItem_1.default, __assign({ value: item.value }, { children: item.label }), 'language' + item.value)); }) })));
};
exports.default = Select;

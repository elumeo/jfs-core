"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Select_1 = __importDefault(require("@material-ui/core/Select"));
var MenuItem_1 = __importDefault(require("@material-ui/core/MenuItem"));
var All_json_1 = __importDefault(require("./All.json"));
var Select = function (_a) {
    var value = _a.value, onChange = _a.onChange;
    return (react_1.default.createElement(Select_1.default, { id: 'settings__language-select', variant: 'standard', fullWidth: true, value: value, onChange: function (event) { return onChange(event.target.value); } }, All_json_1.default.map(function (item) { return (react_1.default.createElement(MenuItem_1.default, { value: item.value, key: 'language' + item.value }, item.label)); })));
};
exports.default = Select;

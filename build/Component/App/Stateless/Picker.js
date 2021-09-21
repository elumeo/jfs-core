"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var pickers_1 = require("@material-ui/pickers");
var moment_1 = __importDefault(require("@date-io/moment"));
var Picker = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(pickers_1.MuiPickersUtilsProvider, { utils: moment_1.default }, children));
};
exports.default = Picker;

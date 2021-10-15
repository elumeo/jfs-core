"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
var index_1 = require("../Button/index");
var ButtonProgress_1 = require("../Button/ButtonProgress");
var StyledIconButtonProgress = (0, styled_components_1.default)(index_1.IconButtonProgress)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .button-progress__wrapper {\n    position: relative;\n    display: inline-block;\n  }\n\n  .button-progress__progress {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-top: ", ";\n    margin-left: ", ";\n  }\n"], ["\n  .button-progress__wrapper {\n    position: relative;\n    display: inline-block;\n  }\n\n  .button-progress__progress {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-top: ", ";\n    margin-left: ", ";\n  }\n"])), function (props) { return ((0, ButtonProgress_1.mapToCircularProgressSize)(props.size) / 2) * -1; }, function (props) { return ((0, ButtonProgress_1.mapToCircularProgressSize)(props.size) / 2) * -1; });
exports.default = StyledIconButtonProgress;
var templateObject_1;

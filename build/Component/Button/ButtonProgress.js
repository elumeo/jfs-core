"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var styled_components_1 = __importDefault(require("styled-components"));
var ButtonProgressBase_1 = __importStar(require("../Button/ButtonProgressBase"));
var ButtonProgress = (0, styled_components_1.default)(ButtonProgressBase_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &.button-progress__wrapper {\n    position: relative;\n    display: inline-block;\n  }\n\n  .button-progress__progress {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-top: ", ";\n    margin-left: ", ";\n  }\n"], ["\n  &.button-progress__wrapper {\n    position: relative;\n    display: inline-block;\n  }\n\n  .button-progress__progress {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-top: ", ";\n    margin-left: ", ";\n  }\n"])), function (props) { return ((0, ButtonProgressBase_1.mapToCircularProgressSize)(props.size) / 2) * -1; }, function (props) { return ((0, ButtonProgressBase_1.mapToCircularProgressSize)(props.size) / 2) * -1; });
exports.default = ButtonProgress;
var templateObject_1;

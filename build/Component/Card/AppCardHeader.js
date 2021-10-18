"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var AppCardHeaderBase_1 = __importDefault(require("../Card/AppCardHeaderBase"));
var AppCardHeader = (0, styled_components_1.default)(AppCardHeaderBase_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  align-items: flex-start;\n\n  .MuiLinearProgress-root {\n    position: absolute;\n    width: ", ";\n    top: 0;\n    left: ", ";\n  }\n\n  .MuiIconButton-root {\n    /*vertical-align: ", ";*/\n    padding: ", ";\n  }\n"], ["\n  position: relative;\n  align-items: flex-start;\n\n  .MuiLinearProgress-root {\n    position: absolute;\n    width: ", ";\n    top: 0;\n    left: ", ";\n  }\n\n  .MuiIconButton-root {\n    /*vertical-align: ", ";*/\n    padding: ", ";\n  }\n"])), function (props) { return 'calc(100% + ' + props.theme.spacing(4) + 'px);'; }, function (props) { return (props.theme.spacing(2) * -1) + 'px;'; }, function (props) { return (props.theme.spacing(0.5) * -1) + 'px;'; }, function (props) { return props.theme.spacing(0.25) + 'px;'; });
exports.default = (0, react_1.memo)(AppCardHeader);
var templateObject_1;

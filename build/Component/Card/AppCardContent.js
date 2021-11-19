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
var AppCardContentBase_1 = __importDefault(require("./AppCardContentBase"));
var AppCardContent = (0, styled_components_1.default)(AppCardContentBase_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex-direction: column;\n  height: ", "\n"], ["\n  flex-direction: column;\n  height: ", "\n"])), function (_a) {
    var theme = _a.theme, _b = _a.fullHeight, fullHeight = _b === void 0 ? false : _b, _c = _a.withSubtitle, withSubtitle = _c === void 0 ? false : _c, _d = _a.overrideCardTitleHeight, overrideCardTitleHeight = _d === void 0 ? null : _d;
    if (overrideCardTitleHeight !== null) {
        return overrideCardTitleHeight;
    }
    var cardTitleHeight = withSubtitle ? theme.spacing(10) : theme.spacing(7);
    return fullHeight
        ? 'calc(100% - ' + cardTitleHeight + 'px)'
        : 'initial';
});
exports.default = (0, react_1.memo)(AppCardContent);
var templateObject_1;

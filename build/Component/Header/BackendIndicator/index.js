"use strict";
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
var react_1 = __importStar(require("react"));
var Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
var Redux_1 = require("../../../Types/Redux");
var react_intl_1 = require("react-intl");
var Flag_1 = __importDefault(require("./Flag"));
var BackendIndicator = function () {
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    var backendRegion = (0, Redux_1.useSelector)(function (state) { return state.Core.System.backendRegion; });
    return (react_1.default.createElement(Tooltip_1.default, { title: formatMessage({ id: 'app.backend' }) + ": " + backendRegion },
        react_1.default.createElement("span", null,
            react_1.default.createElement(Flag_1.default, { country: (backendRegion || '').toLowerCase() }))));
};
exports.default = (0, react_1.memo)(BackendIndicator);

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_intl_1 = require("react-intl");
var material_1 = require("@mui/material");
var styles = {
    textTransform: 'initial',
    width: 'fit-content',
    p: .5,
    lineHeight: 1
};
var Button = function (_a) {
    var _b = _a.id, id = _b === void 0 ? null : _b, onClick = _a.onClick;
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    return id && react_1.default.createElement(material_1.Button, { color: 'secondary', onClick: onClick, sx: styles }, formatMessage({ id: 'product.details' }));
};
exports.default = (0, react_1.memo)(Button);

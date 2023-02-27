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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var CardHeader_1 = __importDefault(require("@mui/material/CardHeader"));
var NotificationIcon_1 = __importDefault(require("./NotificationIcon"));
var sx = {
    width: '100%',
    overflow: 'hidden',
    wordBreak: 'break-word'
};
var Header = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, variant = _a.variant;
    return (!variant && !title && !subtitle
        ? null :
        React.createElement(CardHeader_1.default, { avatar: React.createElement(NotificationIcon_1.default, { variant: variant }), title: React.createElement(Typography_1.default, { variant: 'h5', component: 'div' }, title), subheader: React.createElement(Typography_1.default, { variant: 'subtitle1', component: 'div' }, subtitle), subheaderTypographyProps: { color: 'inherit' }, sx: sx }));
};
exports.default = Header;

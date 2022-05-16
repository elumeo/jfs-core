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
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var CardHeader_1 = __importDefault(require("@material-ui/core/CardHeader"));
var useicon_1 = __importDefault(require("./useicon"));
var styles_1 = require("@material-ui/core/styles");
var useStyles = (0, styles_1.makeStyles)(({
    root: {
        width: '100%',
        overflow: 'hidden'
    }
}));
var Header = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, variant = _a.variant;
    var classes = useStyles();
    var icon = (0, useicon_1.default)(variant);
    return (!icon && !title && !subtitle
        ? null :
        React.createElement(CardHeader_1.default, { avatar: icon, title: React.createElement(Typography_1.default, { variant: 'h6', component: 'div' }, title), subheader: React.createElement(Typography_1.default, { variant: 'subtitle1', component: 'div' }, subtitle), subheaderTypographyProps: { color: 'inherit' }, className: classes.root }));
};
exports.default = React.memo(Header);
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
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var nameWrapperStyles = { flex: 1, minHeight: '55px' };
var useStyles = (0, styles_1.makeStyles)(function (theme) { return (0, styles_1.createStyles)({
    nameStyles: {
        // @ts-ignore
        fontWeight: theme.typography.fontWeightBold,
        whiteSpace: 'normal',
        display: '-webkit-box',
        overflow: 'hidden',
        boxOrient: 'vertical',
        lineClamp: 3,
        lineHeight: 1.3,
    }
}); });
var Name = function (_a) {
    var name = _a.name;
    var styles = useStyles();
    return react_1.default.createElement("div", { style: nameWrapperStyles },
        react_1.default.createElement(core_1.Typography, { className: styles.nameStyles }, name));
};
exports.default = (0, react_1.memo)(Name);
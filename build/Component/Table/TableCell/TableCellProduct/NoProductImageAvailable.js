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
var styles_1 = require("@material-ui/core/styles");
var NoProductImageAvailable = function (_a) {
    var _b = _a.onClick, onClick = _b === void 0 ? null : _b;
    var theme = (0, styles_1.useTheme)();
    var styles = (0, react_1.useMemo)(function () { return ({
        width: theme.spacing(10),
        height: theme.spacing(10),
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: theme.palette.grey['100'],
        userSelect: 'none',
        cursor: 'pointer',
    }); }, []);
    return react_1.default.createElement("div", { style: styles, onClick: onClick }, "No Image available");
};
exports.default = (0, react_1.memo)(NoProductImageAvailable);

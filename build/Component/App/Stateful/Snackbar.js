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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Notification = __importStar(require("../../Notification"));
var notistack_1 = require("notistack");
var Snackbar = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(notistack_1.SnackbarProvider, { anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
        }, maxSnack: 5, domRoot: document.getElementById('overlay') },
        react_1.default.createElement(Notification.Notistack, null),
        children));
};
exports.default = (0, react_1.memo)(Snackbar);

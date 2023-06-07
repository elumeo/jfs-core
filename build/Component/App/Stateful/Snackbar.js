"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var jsx_runtime_1 = require("@welldone-software/why-did-you-render/jsx-runtime");
var Notification = __importStar(require("../../Notification"));
var notistack_1 = require("notistack");
var Redux_1 = require("../../../Types/Redux");
var Definition_1 = __importDefault(require("../Stateless/Style/Theme/Definition"));
var anchorOriginTopRight = { vertical: 'top', horizontal: 'right' };
var anchorOriginBottomRight = { vertical: 'bottom', horizontal: 'right' };
var selectNotificationPosition = function (state) { return state.Core.Configuration.config.NotificationPosition; };
var selectNotificationMax = function (state) { return state.Core.Configuration.config.NotificationMax; };
var classes = ({
    root: {
        background: 'none',
        padding: '0 0',
    },
});
var Snackbar = function (_a) {
    var _b, _c;
    var children = _a.children;
    var notificationPosition = (0, Redux_1.useSelector)(selectNotificationPosition);
    var notificationMax = (0, Redux_1.useSelector)(selectNotificationMax);
    var anchorOrigin = notificationPosition == 'topRight' && anchorOriginTopRight || anchorOriginBottomRight;
    return ((0, jsx_runtime_1.jsxs)(notistack_1.SnackbarProvider, __assign({ style: classes.root, anchorOrigin: anchorOrigin, maxSnack: notificationMax, classes: { containerAnchorOriginTopRight: (_c = (_b = Definition_1.default.mixins) === null || _b === void 0 ? void 0 : _b.toolbar) === null || _c === void 0 ? void 0 : _c.minHeight }, domRoot: document.getElementById('overlay') }, { children: [(0, jsx_runtime_1.jsx)(Notification.Notistack, {}), children] })));
};
exports.default = Snackbar;

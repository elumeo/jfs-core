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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@welldone-software/why-did-you-render/jsx-runtime");
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
        (0, jsx_runtime_1.jsx)(CardHeader_1.default, { avatar: (0, jsx_runtime_1.jsx)(NotificationIcon_1.default, { variant: variant }), title: (0, jsx_runtime_1.jsx)(Typography_1.default, __assign({ variant: 'h5', component: 'div' }, { children: title })), subheader: (0, jsx_runtime_1.jsx)(Typography_1.default, __assign({ variant: 'subtitle1', component: 'div' }, { children: subtitle })), subheaderTypographyProps: { color: 'inherit' }, sx: sx }));
};
exports.default = Header;

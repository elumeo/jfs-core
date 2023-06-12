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
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var RefreshButton_1 = __importDefault(require("../Button/RefreshButton"));
var hiddenStyle = {
    visibility: 'hidden',
};
var Header = function (_a) {
    var _b = _a.isLoading, isLoading = _b === void 0 ? false : _b, title = _a.title, _c = _a.subtitle, subtitle = _c === void 0 ? null : _c, _d = _a.titleIcon, titleIcon = _d === void 0 ? null : _d, _e = _a.onRefresh, onRefresh = _e === void 0 ? null : _e, _f = _a.refreshButtonColor, refreshButtonColor = _f === void 0 ? 'secondary' : _f, _g = _a.refreshButtonSize, refreshButtonSize = _g === void 0 ? 'small' : _g, _h = _a.action, action = _h === void 0 ? null : _h;
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(material_1.LinearProgress, { color: 'secondary', sx: isLoading ? {} : hiddenStyle }), (0, jsx_runtime_1.jsx)(material_1.CardHeader, { subheader: subtitle, action: action, disableTypography: true, title: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(material_1.Stack, __assign({ direction: 'row', spacing: 1, alignItems: 'center' }, { children: [titleIcon, typeof title === 'string' ? (0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ variant: 'h5' }, { children: title })) : title, onRefresh !== null && (0, jsx_runtime_1.jsx)(RefreshButton_1.default, { color: refreshButtonColor, size: refreshButtonSize, inProgress: isLoading, onClick: onRefresh })] })) }) })] });
};
exports.default = Header;

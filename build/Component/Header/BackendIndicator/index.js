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
var Tooltip_1 = __importDefault(require("@mui/material/Tooltip"));
var Redux_1 = require("../../../Types/Redux");
var react_intl_1 = require("react-intl");
var Flag_1 = __importDefault(require("./Flag"));
var material_1 = require("@mui/material");
var BackendIndicator = function () {
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    var backendRegion = (0, Redux_1.useSelector)(function (state) { return state.Core.System.backendRegion; });
    return ((0, jsx_runtime_1.jsx)(material_1.Box, __assign({ flexGrow: 0 }, { children: (0, jsx_runtime_1.jsx)(Tooltip_1.default, __assign({ title: "".concat(formatMessage({ id: 'app.backend' }), ": ").concat(backendRegion) }, { children: (0, jsx_runtime_1.jsx)(material_1.Box, __assign({ flexGrow: 0 }, { children: (0, jsx_runtime_1.jsx)(Flag_1.default, { country: (backendRegion || '').toLowerCase() }) })) })) })));
};
exports.default = BackendIndicator;

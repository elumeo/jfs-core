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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var Redux_1 = require("../../../Types/Redux");
var Indicator = function (_a) {
    var client = _a.client;
    var isNamespaceConnected = (0, Redux_1.useSelector)(function (state) {
        var _a;
        return Boolean((client === null || client === void 0 ? void 0 : client.PrivateNamespace) &&
            ((_a = state.Core.WebSocket[client === null || client === void 0 ? void 0 : client.PrivateNamespace]) === null || _a === void 0 ? void 0 : _a.isConnected));
    });
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, __assign({ sx: { width: 300 } }, { children: ["WS ", client.PrivateNamespace, " Status:", ' ', (0, jsx_runtime_1.jsx)(material_1.Box, { sx: {
                    background: isNamespaceConnected ? 'green' : 'red',
                    borderRadius: '50%',
                    width: 10,
                    height: 10,
                    display: 'inline-block',
                } })] })));
};
exports.default = Indicator;

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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var FormattedMsisdn_1 = __importDefault(require("../../FormattedMsisdn"));
var Loading_1 = __importDefault(require("../../Table/Cell/Loading"));
var Root_1 = __importDefault(require("../../Table/Cell/Root"));
var VirtualizedTable_1 = require("../../Table/VirtualizedTable");
var material_1 = require("@mui/material");
var Msisdn = function (_a) {
    var value = _a.value, _b = _a.isLoading, isLoading = _b === void 0 ? false : _b, rest = __rest(_a, ["value", "isLoading"]);
    return (0, jsx_runtime_1.jsx)(Root_1.default, __assign({}, rest, { children: isLoading
            ? (0, jsx_runtime_1.jsx)(Loading_1.default, {})
            : value
                ? (0, jsx_runtime_1.jsx)(material_1.Box, __assign({ sx: VirtualizedTable_1.ellipsesStyle }, { children: (0, jsx_runtime_1.jsx)(FormattedMsisdn_1.default, { msisdn: value }) }))
                : '-' }));
};
exports.default = Msisdn;

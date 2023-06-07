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
var Wrapper_1 = __importDefault(require("../Wrapper"));
var FilterReset = function (props) { return ((0, jsx_runtime_1.jsx)(Wrapper_1.default, __assign({}, props, { children: (0, jsx_runtime_1.jsx)("g", __assign({ stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' }, { children: (0, jsx_runtime_1.jsx)("g", __assign({ transform: 'translate(1.000000, 0.000000)', fill: 'currentcolor', fillRule: 'nonzero' }, { children: (0, jsx_runtime_1.jsx)("path", { d: 'M11.7391304,23.4782609 L16.9565217,23.4782609 L16.9565217,20.8695652 L11.7391304,20.8695652 L11.7391304,23.4782609 Z M0,2.73913043 L27.2608696,30 L28.9565217,28.3043478 L1.56521739,1.04347826 L0,2.73913043 Z M2.60869565,7.82608696 L2.60869565,10.4347826 L7.82608696,10.4347826 L7.82608696,7.82608696 L2.60869565,7.82608696 Z M11.7391304,7.82608696 L14.3478261,10.4347826 L26.0869565,10.4347826 L26.0869565,7.82608696 L11.7391304,7.82608696 Z M6.52173913,16.9565217 L14.3478261,16.9565217 L14.3478261,14.3478261 L6.52173913,14.3478261 L6.52173913,16.9565217 Z M20.8695652,16.9565217 L22.173913,16.9565217 L22.173913,14.3478261 L18.2608696,14.3478261 L20.8695652,16.9565217 Z' }) })) })) }))); };
exports.default = FilterReset;

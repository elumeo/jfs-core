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
var react_1 = __importDefault(require("react"));
var ConnectedRouter_1 = __importDefault(require("./ConnectedRouter"));
// import { useSelector } from '../../../Types/Redux';
var Middleware_1 = require("../../../Store/Middleware");
var Redux_1 = require("../../../Types/Redux");
// @ts-ignore With react 18 it is required to specify children directly. Issue already created: https://github.com/supasate/connected-react-router/issues/565
var Router = function (props) {
    var _history = (0, Redux_1.useSelector)(function (state) { return state.router; });
    console.log('state', { _history: _history, history: Middleware_1.history });
    return react_1.default.createElement(ConnectedRouter_1.default, __assign({ history: Middleware_1.history, location: Middleware_1.history.location }, props));
};
exports.default = Router;

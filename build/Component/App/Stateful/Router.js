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
var redux_react_router_1 = require("@lagunovsky/redux-react-router");
var Middleware_1 = require("../../../Store/Middleware");
var Router = function (props) {
    return react_1.default.createElement(redux_react_router_1.ReduxRouter, __assign({}, props, { history: Middleware_1.history }));
};
exports.default = Router;

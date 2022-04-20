"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var connected_react_router_1 = require("connected-react-router");
var Middleware_1 = require("../../../Store/Middleware");
// @ts-ignore With react 18 it is required to specify children directly. Issue already created: https://github.com/supasate/connected-react-router/issues/565
var Router = function (_a) {
    var children = _a.children;
    return react_1.default.createElement(connected_react_router_1.ConnectedRouter, { history: Middleware_1.history }, children);
};
exports.default = Router;

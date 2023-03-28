"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var RouterProvider = function (_a) {
    var routes = _a.routes;
    var router = (0, react_router_dom_1.createHashRouter)((0, react_router_dom_1.createRoutesFromElements)(routes));
    return react_1.default.createElement(react_router_dom_1.RouterProvider, { router: router });
};
exports.default = RouterProvider;

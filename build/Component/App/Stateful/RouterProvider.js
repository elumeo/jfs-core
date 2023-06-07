"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var RouterProvider = function (_a) {
    var routes = _a.routes;
    var router = (0, react_router_dom_1.createHashRouter)((0, react_router_dom_1.createRoutesFromElements)(routes));
    return (0, jsx_runtime_1.jsx)(react_router_dom_1.RouterProvider, { router: router });
};
exports.default = RouterProvider;

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
var jsx_runtime_1 = require("@welldone-software/why-did-you-render/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var AuthRoute_1 = __importDefault(require("Component/Route/AuthRoute"));
var NoAuthRoute_1 = __importDefault(require("Component/Route/NoAuthRoute"));
var Routes = function () { return ((0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsxs)(react_router_dom_1.Route, __assign({ path: '/start', element: (0, jsx_runtime_1.jsx)(AuthRoute_1.default, { title: 'app.title', translateTitle: true, subtitle: 'test' }) }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { index: true, element: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: ':id', element: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}) })] })), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, __assign({ path: '/app_layout', element: (0, jsx_runtime_1.jsx)(NoAuthRoute_1.default, {}) }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { index: true, element: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}) }) })), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, __assign({ path: '*', element: (0, jsx_runtime_1.jsx)(AuthRoute_1.default, {}) }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '*', element: (0, jsx_runtime_1.jsx)(react_router_dom_1.Navigate, { to: '/start', replace: true }) }) }))] })); };
exports.default = Routes;

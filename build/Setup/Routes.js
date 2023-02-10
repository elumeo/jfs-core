"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var AuthRoute_1 = __importDefault(require("../Component/Route/AuthRoute"));
var NoAuthRoute_1 = __importDefault(require("../Component/Route/NoAuthRoute"));
var develop_1 = __importDefault(require("../Component/develop"));
var DevelopAppLayout_1 = __importDefault(require("../Component/DevelopAppLayout"));
var Routes = function () { return (react_1.default.createElement(react_router_dom_1.Routes, null,
    react_1.default.createElement(react_router_dom_1.Route, { path: '/start', element: react_1.default.createElement(AuthRoute_1.default, { title: 'app.title', translateTitle: true, subtitle: 'test' }) },
        react_1.default.createElement(react_router_dom_1.Route, { index: true, element: react_1.default.createElement(develop_1.default, null) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: ':id', element: react_1.default.createElement(develop_1.default, null) })),
    react_1.default.createElement(react_router_dom_1.Route, { path: '/app_layout', element: react_1.default.createElement(NoAuthRoute_1.default, null) },
        react_1.default.createElement(react_router_dom_1.Route, { index: true, element: react_1.default.createElement(DevelopAppLayout_1.default, null) })),
    react_1.default.createElement(react_router_dom_1.Route, { path: '*', element: react_1.default.createElement(AuthRoute_1.default, null) },
        react_1.default.createElement(react_router_dom_1.Route, { path: '*', element: react_1.default.createElement(react_router_dom_1.Navigate, { to: '/start', replace: true }) })))); };
exports.default = Routes;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Content_1 = __importDefault(require("../Component/Content/Content"));
var AuthRoute_1 = __importDefault(require("../Component/Route/AuthRoute"));
var develop_1 = __importDefault(require("../Component/develop"));
var Routes = function () { return (react_1.default.createElement(Content_1.default, null,
    react_1.default.createElement(react_router_dom_1.Routes, null,
        react_1.default.createElement(react_router_dom_1.Route, { key: 'start', path: '/start', element: react_1.default.createElement(AuthRoute_1.default, null,
                react_1.default.createElement(develop_1.default, null)) }),
        react_1.default.createElement(react_router_dom_1.Route, { key: 'start', path: '/start2', element: react_1.default.createElement(AuthRoute_1.default, null, "hi") }),
        react_1.default.createElement(react_router_dom_1.Route, { key: 'default', path: '/', element: react_1.default.createElement(react_router_dom_1.Navigate, { to: '/start' }) })))); };
exports.default = Routes;

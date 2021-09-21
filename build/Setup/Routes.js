"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Content_1 = __importDefault(require("../Component/Content/Content"));
var AuthRoute_1 = __importDefault(require("../Component/Route/AuthRoute"));
var NoAuthRoute_1 = __importDefault(require("../Component/Route/NoAuthRoute"));
var develop_1 = __importDefault(require("../Component/develop"));
var Routes = function () { return (react_1.default.createElement(Content_1.default, null,
    react_1.default.createElement(react_router_dom_1.Switch, null,
        react_1.default.createElement(AuthRoute_1.default, { key: 'start', exact: true, path: '/start', component: function () { return react_1.default.createElement(develop_1.default, null); } }),
        react_1.default.createElement(NoAuthRoute_1.default, { key: 'default', exact: true, path: '/', component: function () { return react_1.default.createElement(react_router_dom_1.Redirect, { to: { pathname: '/start' } }); } })))); };
exports.default = Routes;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var Core_1 = __importDefault(require("./Core"));
var redux_react_router_1 = require("@lagunovsky/redux-react-router");
var Middleware_1 = require("../Middleware");
var Global = (0, redux_1.combineReducers)({
    Core: Core_1.default,
    router: (0, redux_react_router_1.createRouterReducer)(Middleware_1.history),
});
exports.default = Global;

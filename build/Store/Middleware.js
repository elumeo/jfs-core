"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = exports.history = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
var redux_1 = require("redux");
var redux_devtools_extension_1 = require("redux-devtools-extension");
var redux_observable_1 = require("redux-observable");
var connected_react_router_1 = require("connected-react-router");
var history_1 = require("history");
exports.history = (0, history_1.createHashHistory)();
var epicMiddleware = (0, redux_observable_1.createEpicMiddleware)({
    dependencies: { history: exports.history },
});
var composeEnhancers = (0, redux_devtools_extension_1.composeWithDevTools)({ trace: true, traceLimit: 25 });
var storeEnhancer = (0, redux_1.applyMiddleware)(epicMiddleware, (0, connected_react_router_1.routerMiddleware)(exports.history));
var middleware = (process.env.NODE_ENV == 'development'
    && typeof window !== 'undefined'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    ? composeEnhancers(storeEnhancer)
    : storeEnhancer;
var start = function (epic) { return epicMiddleware.run(epic); };
exports.start = start;
exports.default = middleware;

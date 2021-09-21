"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRouteDetails = exports.enterUnauthorizedRoute = exports.enterAuthorizedRoute = void 0;
var typesafe_actions_1 = require("typesafe-actions");
exports.enterAuthorizedRoute = (0, typesafe_actions_1.createAction)('route/ENTER_AUTHORIZED')();
exports.enterUnauthorizedRoute = (0, typesafe_actions_1.createAction)('route/ENTER_UNAUTHORIZED')();
exports.updateRouteDetails = (0, typesafe_actions_1.createAction)('route/UPDATE')();

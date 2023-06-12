"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRegionFailed = exports.regionLoaded = void 0;
var typesafe_actions_1 = require("typesafe-actions");
exports.regionLoaded = (0, typesafe_actions_1.createAction)('region/LOADED')();
exports.getRegionFailed = (0, typesafe_actions_1.createAction)('region/GET_FAILED')();

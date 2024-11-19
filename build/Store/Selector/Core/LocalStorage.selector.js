"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pickState = void 0;
var reselect_1 = require("reselect");
var Core_1 = require("./Core");
exports.pickState = (0, reselect_1.createSelector)(Core_1.Core, function (core) { return core.LocalStorage; });

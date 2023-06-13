"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_observable_1 = require("redux-observable");
var load_1 = __importDefault(require("./load"));
var check_1 = __importDefault(require("./check"));
var logout_1 = __importDefault(require("./logout"));
var authorize_1 = __importDefault(require("./authorize"));
var unauthorize_1 = __importDefault(require("./unauthorize"));
exports.default = (0, redux_observable_1.combineEpics)(logout_1.default, load_1.default, check_1.default, authorize_1.default, unauthorize_1.default);

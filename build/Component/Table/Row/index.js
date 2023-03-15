"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Loading_1 = __importDefault(require("./Loading"));
var NoResults_1 = __importDefault(require("./NoResults"));
var Row = {
    Loading: Loading_1.default,
    NoResults: NoResults_1.default
};
exports.default = Row;

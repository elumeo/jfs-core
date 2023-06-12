"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var NoResults_1 = __importDefault(require("./NoResults"));
var Footer_1 = __importDefault(require("./Footer"));
var Row = {
    NoResults: NoResults_1.default,
    Footer: Footer_1.default
};
exports.default = Row;

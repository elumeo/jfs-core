"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var useConfig_1 = __importDefault(require("Effect/useConfig"));
var useCurrency = function () {
    var Currency = (0, useConfig_1.default)().Currency;
    return Currency;
};
exports.default = useCurrency;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var HelloWorld = function () { return (react_1.default.createElement(core_1.Button, { color: 'primary', variant: 'contained' }, "Hello World")); };
exports.default = HelloWorld;

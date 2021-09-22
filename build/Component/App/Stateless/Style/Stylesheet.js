"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_helmet_1 = __importDefault(require("react-helmet"));
var Stylesheet = function () { return (react_1.default.createElement(react_helmet_1.default, null,
    react_1.default.createElement("link", { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' }),
    react_1.default.createElement("link", { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined' }),
    react_1.default.createElement("link", { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }))); };
exports.default = Stylesheet;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var CardActions_1 = __importDefault(require("@mui/material/CardActions"));
var DeleteAllButton_1 = __importDefault(require("./DeleteAllButton"));
var Toolbar = function () { return ((0, jsx_runtime_1.jsx)(CardActions_1.default, { children: (0, jsx_runtime_1.jsx)(DeleteAllButton_1.default, {}) })); };
exports.default = Toolbar;

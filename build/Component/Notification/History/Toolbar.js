"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CardActions_1 = __importDefault(require("@mui/material/CardActions"));
var DeleteAllButton_1 = __importDefault(require("./DeleteAllButton"));
var Toolbar = function () { return (react_1.default.createElement(CardActions_1.default, null,
    react_1.default.createElement(DeleteAllButton_1.default, null))); };
exports.default = Toolbar;

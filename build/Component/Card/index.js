"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Content_1 = __importDefault(require("./Content"));
var Header_1 = __importDefault(require("./Header"));
var Card = {
    Content: Content_1.default,
    Header: Header_1.default,
};
exports.default = Card;

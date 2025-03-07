"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAgent = exports.agents = void 0;
var Clippy_1 = __importDefault(require("clippyts/dist/agents/Clippy"));
var Links_1 = __importDefault(require("clippyts/dist/agents/Links"));
exports.agents = {
    Clippy: Clippy_1.default,
    Links: Links_1.default,
};
function getAgent(name) {
    return exports.agents[name];
}
exports.getAgent = getAgent;

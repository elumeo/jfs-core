"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var clippyts_1 = __importDefault(require("clippyts"));
var Clippy_type_1 = require("../../Types/Clippy.type");
function default_1(agent) {
    return new Promise(function (resolve, reject) {
        if (!(0, Clippy_type_1.isValidAgent)(agent)) {
            reject(new Error("Agent ".concat(agent, " is not supported")));
            return;
        }
        clippyts_1.default.load({
            name: agent,
            successCb: function (agent) {
                resolve(agent);
            },
            failCb: function (error) {
                reject(error);
            }
        });
    });
}
exports.default = default_1;

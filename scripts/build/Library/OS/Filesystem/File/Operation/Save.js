"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Write_1 = __importDefault(require("./Write"));
exports.default = (path, json, onComplete) => Write_1.default(path, JSON.stringify(json, null, 2), onComplete);
//# sourceMappingURL=Save.js.map
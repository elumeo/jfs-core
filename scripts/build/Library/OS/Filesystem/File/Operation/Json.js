"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Read_1 = __importDefault(require("./Read"));
exports.default = (path, onComplete) => Read_1.default(path, data => onComplete(JSON.parse(data)));
//# sourceMappingURL=Json.js.map
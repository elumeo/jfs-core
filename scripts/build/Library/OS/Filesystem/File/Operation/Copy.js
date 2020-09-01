"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Read_1 = __importDefault(require("./Read"));
const Write_1 = __importDefault(require("./Write"));
exports.default = (from, to, onComplete) => Read_1.default(from, data => Write_1.default(to, data, onComplete));
//# sourceMappingURL=Copy.js.map
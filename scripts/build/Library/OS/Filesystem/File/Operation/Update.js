"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Read_1 = __importDefault(require("./Read"));
const Write_1 = __importDefault(require("./Write"));
exports.default = (path, { patcher, onComplete }) => Read_1.default(path, data => Write_1.default(path, patcher(data), onComplete));
//# sourceMappingURL=Update.js.map
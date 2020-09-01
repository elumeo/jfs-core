"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rimraf_1 = __importDefault(require("rimraf"));
exports.default = (path, onComplete) => rimraf_1.default(path, onComplete);
//# sourceMappingURL=Remove.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Copy_1 = __importDefault(require("./Copy"));
const Remove_1 = __importDefault(require("./Remove"));
exports.default = (from, to, onComplete) => Copy_1.default(from, to, () => Remove_1.default(from, onComplete));
//# sourceMappingURL=Move.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Mirror_1 = __importDefault(require("./Mirror"));
const Environment_1 = __importDefault(require("./Environment"));
class Virtual {
}
Virtual.Mirror = Mirror_1.default;
Virtual.Environment = Environment_1.default;
exports.default = Virtual;
//# sourceMappingURL=index.js.map
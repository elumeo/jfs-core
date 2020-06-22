"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JFS_1 = __importDefault(require("../Library/JFS"));
const Core_1 = __importDefault(require("../Library/JFS/Core"));
JFS_1.default.discover(() => {
    JFS_1.default.Head.JSC.generate(JFS_1.default.Head, { core: JFS_1.default.Head instanceof Core_1.default });
});
//# sourceMappingURL=jsc-generate.js.map
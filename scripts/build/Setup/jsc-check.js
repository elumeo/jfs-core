"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JFS_1 = __importDefault(require("../Library/JFS"));
const Location_1 = __importDefault(require("../Library/JFS/Environment/Location"));
JFS_1.default.discover(() => {
    const { Environment, Core } = JFS_1.default;
    const { Head } = Environment;
    if (Environment.Location.type === Location_1.default.Type.LOCAL) {
        Core.JSC.check(Core.config);
    }
    else if (Environment.Location.type === Location_1.default.Type.REMOTE) {
        Head.JSC.check(Head.config);
    }
});
//# sourceMappingURL=jsc-check.js.map
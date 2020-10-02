"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const Text_1 = __importDefault(require("../../Text"));
class Script {
    constructor({ path, run, scope, force, name }) {
        this.path = path;
        this.name = name;
        this.scope = scope;
        const original = Text_1.default.removeSuffix(path_1.basename(process.argv[1]), path_1.extname(process.argv[1]));
        if (original !== Script.registrator || force) {
            run();
        }
    }
}
Script.registrator = 'register-scripts';
exports.default = Script;
//# sourceMappingURL=Script.js.map
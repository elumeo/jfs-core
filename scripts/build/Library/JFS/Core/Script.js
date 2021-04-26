"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const Text = __importStar(require("../../Text"));
class Script {
    constructor({ path, run, scope, force, name }) {
        this.path = path;
        this.name = name;
        this.scope = scope;
        const original = Text.Suffix.remove(path_1.basename(process.argv[1]), path_1.extname(process.argv[1]));
        if (original !== Script.registrator || force) {
            run();
        }
    }
}
Script.registrator = 'register-scripts';
exports.default = Script;
//# sourceMappingURL=Script.js.map
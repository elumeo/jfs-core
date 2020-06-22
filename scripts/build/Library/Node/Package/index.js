"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const File_1 = __importDefault(require("../../OS/Filesystem/File"));
const Module_1 = __importDefault(require("../Module"));
class NodePackage {
    constructor(path) {
        this.nodeModule = (nodeModuleName) => new Module_1.default({
            path: Module_1.default.location(this.file.parent, nodeModuleName)
        });
        this.json = (onComplete) => this.file.json(onComplete);
        this.path = path;
        this.file = new File_1.default({ path });
    }
}
NodePackage.location = (path) => path_1.resolve(path, 'package.json');
exports.default = NodePackage;
//# sourceMappingURL=index.js.map
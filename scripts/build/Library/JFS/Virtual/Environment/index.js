"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Directory_1 = __importDefault(require("../../../OS/Filesystem/Directory"));
const File_1 = __importDefault(require("../../../OS/Filesystem/File"));
const __1 = __importDefault(require(".."));
const path_1 = require("path");
class Environment {
    constructor({ root, source }) {
        this.mirrors = [];
        this.createVirtualPath = (...segments) => path_1.resolve(this.root, ...segments);
        this.createSourcePath = (...segments) => path_1.resolve(this.source.path, ...segments);
        this.addMirror = ({ virtualPath, sourcePath }) => {
            this.mirrors.push(new __1.default.Mirror({
                virtualFile: new File_1.default({ path: virtualPath }),
                sourceFile: new File_1.default({ path: sourcePath })
            }));
        };
        this.root = root;
        this.directory = new Directory_1.default({ path: root });
        this.source = new Directory_1.default({ path: source });
    }
}
exports.default = Environment;
//# sourceMappingURL=index.js.map
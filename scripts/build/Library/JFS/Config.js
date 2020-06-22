"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JFS = void 0;
const File_1 = __importDefault(require("../OS/Filesystem/File"));
const path_1 = require("path");
var JFS;
(function (JFS) {
    class Config {
        constructor(path) {
            this.read = (configReady) => this.file.read(data => configReady(JSON.parse(data)));
            this.path = path;
            this.file = new File_1.default({ path: this.path });
        }
    }
    Config.location = (path) => path_1.resolve(path, 'config.json.dist');
    JFS.Config = Config;
})(JFS = exports.JFS || (exports.JFS = {}));
exports.default = JFS.Config;
//# sourceMappingURL=Config.js.map
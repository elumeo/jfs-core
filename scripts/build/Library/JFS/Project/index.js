"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Directory_1 = __importDefault(require("../../OS/Filesystem/Directory"));
const Package_1 = __importDefault(require("../../Node/Package"));
const Config_1 = __importDefault(require("../../JFS/Config"));
const Text_1 = __importDefault(require("../../Text"));
const Translations_1 = __importDefault(require("./Translations"));
const Api_1 = __importDefault(require("./Api"));
const File_1 = __importDefault(require("../../OS/Filesystem/File"));
const path_1 = require("path");
class Project {
    constructor({ path }) {
        this.translations = (onComplete) => Translations_1.default.get(this.path, translations => onComplete(new Translations_1.default(translations)));
        this.path = path;
        this.directory = new Directory_1.default({ path });
        this.name = this.directory.name;
        if (this.directory.name.substring('jfc-'.length) !== '') {
            this.name = this.directory.name
                .substring('jfc-'.length)
                .split('-')
                .map(Text_1.default.capitalize)
                .join('');
        }
        this.nodePackage = new Package_1.default(Package_1.default.location(path));
        this.JSC = new Api_1.default(Api_1.default.location(path));
        this.config = new Config_1.default(Config_1.default.location(path));
        this.tsconfig = new File_1.default({
            path: path_1.resolve(path, 'tsconfig.json')
        });
    }
}
exports.default = Project;
//# sourceMappingURL=index.js.map
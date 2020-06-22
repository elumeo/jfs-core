"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Package_1 = __importDefault(require("../../Node/Package"));
const LocalLink_1 = __importDefault(require("./LocalLink"));
const Config_1 = require("../../JFS/Config");
const JSC_1 = __importDefault(require("../../JSC"));
const Directory_1 = __importDefault(require("../../OS/Filesystem/Directory"));
class Head {
    constructor({ path, type }) {
        this.synchronize = (...syncDirectoryNames) => {
            this.nodePackage.json(({ dependencies }) => {
                const localLinks = Object.keys(dependencies)
                    .filter(dependencyName => LocalLink_1.default.isLocalLink(dependencies[dependencyName]))
                    .map((dependencyName) => LocalLink_1.default.fromDependency(this.nodePackage, dependencyName, dependencies[dependencyName]));
                if (!localLinks.length) {
                    LocalLink_1.default.warnNoLocalLinks();
                }
                else {
                    LocalLink_1.default.showLocalLinks(localLinks);
                }
                localLinks.forEach((localLink) => localLink.sync(this.nodePackage.file.parent, syncDirectoryNames));
            });
        };
        this.path = path;
        this.type = type;
        this.directory = new Directory_1.default({ path });
        this.nodePackage = new Package_1.default(Package_1.default.location(path));
        this.config = new Config_1.JFS.Config(Config_1.JFS.Config.location(path));
        this.JSC = new JSC_1.default(JSC_1.default.location(path));
    }
}
(function (Head) {
    let Type;
    (function (Type) {
        Type["APP"] = "app";
        Type["COMPONENT"] = "component";
        Type["CORE"] = "core";
    })(Type = Head.Type || (Head.Type = {}));
})(Head || (Head = {}));
exports.default = Head;
//# sourceMappingURL=Head.js.map
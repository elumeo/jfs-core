"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./App"));
const Core_1 = __importDefault(require("./Core"));
const Component_1 = __importDefault(require("./Component"));
const Package_1 = __importDefault(require("../Node/Package"));
const Text_1 = __importDefault(require("../Text"));
class JFS {
}
JFS.Core = null;
JFS.projects = [];
JFS.project = (nodePackage, onComplete) => {
    const path = nodePackage.file.parent;
    nodePackage.json(({ name }) => {
        if (name === '@elumeo/jfs-core') {
            onComplete(new Core_1.default({ path }));
        }
        else if (Text_1.default.beginsWith(name, 'jfc')) {
            onComplete(new Component_1.default({ path }));
        }
        else if (Text_1.default.beginsWith(name, 'jfs')) {
            onComplete(new App_1.default({ path }));
        }
    });
};
JFS.discover = (onComplete) => JFS.project(new Package_1.default(Package_1.default.location(process.cwd())), project => {
    JFS.Head = project;
    if (project instanceof Core_1.default) {
        JFS.Core = project;
    }
    else {
        JFS.project(new Package_1.default(Package_1.default.location(JFS.Head.directory.resolve('node_modules', '@elumeo', 'jfs-core'))), project => {
            JFS.Core = project;
            onComplete();
        });
    }
});
exports.default = JFS;
//# sourceMappingURL=index.js.map
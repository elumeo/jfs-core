"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./App"));
const Core_1 = __importDefault(require("./Core"));
const Component_1 = __importDefault(require("./Component"));
const Explorer_1 = __importDefault(require("../OS/Filesystem/Explorer"));
const Package_1 = __importDefault(require("../Node/Package"));
const Text_1 = __importDefault(require("../Text"));
const path_1 = require("path");
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
JFS.discover = (onComplete) => {
    const explorer = new Explorer_1.default(path_1.resolve(__dirname, '..', '..', '..', '..'));
    explorer.explore(Package_1.default.location, (paths) => (paths
        .map(path => new Package_1.default(Package_1.default.location(path)))
        .forEach((nodePackage) => {
        JFS.project(nodePackage, project => {
            JFS.projects.push(project);
            if (project instanceof Core_1.default) {
                JFS.Core = project;
            }
            if (JFS.projects.length === paths.length) {
                JFS.Head = JFS.projects[JFS.projects.length - 1];
                onComplete();
            }
        });
    })));
};
exports.default = JFS;
//# sourceMappingURL=index.js.map
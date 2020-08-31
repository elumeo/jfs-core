"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./App"));
const Core_1 = __importDefault(require("./Core"));
const Component_1 = __importDefault(require("./Component"));
const File_1 = __importDefault(require("../OS/Filesystem/File"));
const Package_1 = __importDefault(require("../Node/Package"));
const Text_1 = __importDefault(require("../Text"));
const path_1 = require("path");
const Directory_1 = __importDefault(require("../OS/Filesystem/Directory"));
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
        else {
            throw `Invalid name format in  ${nodePackage.file.path}`;
        }
    });
};
JFS.discover = (onComplete) => {
    const directory = new Directory_1.default({ path: __dirname });
    const projects = directory
        .trace()
        .filter(path => (!Text_1.default.endsWith(path, 'scripts') &&
        new File_1.default({ path: path_1.resolve(path, 'package.json') }).exists()));
    const nodePackages = projects.map(path => new Package_1.default(Package_1.default.location(path)));
    JFS.project(nodePackages[0], project => {
        if (project instanceof Core_1.default) {
            JFS.Core = project;
        }
        JFS.Head = project;
        JFS.projects.push(project);
        if (JFS.projects.length === projects.length) {
            onComplete();
        }
    });
    if (nodePackages.length > 1) {
        nodePackages
            .slice(1)
            .forEach(nodePackage => {
            JFS.project(nodePackage, project => {
                JFS.projects.push(project);
                if (JFS.projects.length === projects.length) {
                    onComplete();
                }
            });
        });
    }
};
exports.default = JFS;
//# sourceMappingURL=index.js.map
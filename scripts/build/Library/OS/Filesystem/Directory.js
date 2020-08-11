"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const FsNode_1 = __importDefault(require("./FsNode"));
const File_1 = __importDefault(require("./File"));
const path_1 = require("path");
const rimraf_1 = __importDefault(require("rimraf"));
const ncp_1 = __importDefault(require("ncp"));
const chokidar_1 = __importDefault(require("chokidar"));
class Directory extends FsNode_1.default {
    constructor() {
        super(...arguments);
        this.children = onComplete => {
            fs_1.readdir(this.path, (error, childrenNames) => {
                if (error) {
                    throw error;
                }
                else {
                    const files = [];
                    const directories = [];
                    childrenNames.forEach((childName) => {
                        const fsNode = new FsNode_1.default({
                            path: path_1.resolve(this.path, childName)
                        });
                        fsNode.stats(stats => {
                            if (stats.isDirectory()) {
                                directories.push(new Directory({ path: fsNode.path }));
                            }
                            else {
                                files.push(new File_1.default({ path: fsNode.path }));
                            }
                            if (childrenNames.length === files.length + directories.length) {
                                onComplete({
                                    directories,
                                    files
                                });
                            }
                        });
                    });
                }
            });
        };
        this.child = ({ childName, childReady }) => this.children(({ files, directories }) => childReady(files.find(file => file.name === childName) ||
            directories.find(directory => directory.name === childName)));
        this.files = (filesReady) => this.children(({ files }) => filesReady(files));
        this.file = (fileName, fileReady) => this.files(files => fileReady(files.find(file => file.name === fileName)));
        this.directories = (directoriesReady) => this.children(({ directories }) => directoriesReady(directories));
        this.directory = (directoryName, directoryReady) => this.directories(directories => directoryReady(directories.find(directory => directory.name === directoryName)));
        this.remove = (directoryRemoved) => rimraf_1.default(this.path, directoryRemoved);
        this.copy = (target, onComplete) => ncp_1.default(this.path, target, (error) => {
            if (error) {
                throw error;
            }
            else {
                onComplete();
            }
        });
        this.create = (directoryCreated) => {
            this.predecessors.reduce((parent, segment) => {
                if (parent) {
                    const path = (parent.length > 1
                        ? `${parent}${path_1.sep}${segment}`
                        : `${parent}${segment}`);
                    if (!fs_1.existsSync(path)) {
                        fs_1.mkdirSync(path);
                    }
                    return path;
                }
                else {
                    return `${path_1.sep}${segment}`;
                }
            }, null);
            fs_1.mkdir(this.path, directoryCreated);
        };
        this.on = (event, handle) => {
            this.emitter.on(event, handle);
        };
        this.watch = (options) => {
            this.watcher = chokidar_1.default.watch(this.path, options);
            this.watcher.once('ready', () => this.watcher.on('all', (event, path) => {
                if (event === 'add') {
                    this.emitter.emit('FILE_CREATED', new File_1.default({ path }));
                }
                else if (event === 'change') {
                    this.emitter.emit('FILE_CHANGED', new File_1.default({ path }));
                }
                else if (event === 'unlink') {
                    this.emitter.emit('FILE_REMOVED', new File_1.default({ path }));
                }
                else if (event === 'addDir') {
                    this.emitter.emit('DIRECTORY_CREATED', new Directory({ path }));
                }
                else if (event === 'unlinkDir') {
                    this.emitter.emit('DIRECTORY_REMOVED', new Directory({ path }));
                }
            }));
        };
        this.unwatch = () => this.watcher.close();
        this.trace = (origin = this) => {
            if (origin.path.length > 1) {
                return [
                    ...this.trace(new Directory({ path: origin.parent })),
                    origin.path
                ];
            }
            else {
                return [path_1.sep];
            }
        };
    }
}
Directory.events = [
    'FILE_CREATED',
    'FILE_CHANGED',
    'FILE_REMOVED',
    'DIRECTORY_CREATED',
    'DIRECTORY_REMOVED'
];
exports.default = Directory;
//# sourceMappingURL=Directory.js.map
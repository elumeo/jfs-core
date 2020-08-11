"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const FsNode_1 = __importDefault(require("../FsNode"));
const File_1 = __importDefault(require("../File"));
const path_1 = require("path");
const rimraf_1 = __importDefault(require("rimraf"));
const ncp_1 = __importDefault(require("ncp"));
const chokidar_1 = __importDefault(require("chokidar"));
const Explorer_1 = __importDefault(require("../Explorer"));
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
        this.create = (directoryCreated) => ((new Explorer_1.default(this.path)).explore((path) => path, pathStack => {
            const payload = (this.path
                .substring(pathStack[0].length, this.path.length)
                .split(path_1.sep)
                .slice(1));
            const createChild = (payload, onComplete) => {
                if (!payload.length) {
                    onComplete();
                }
                else {
                    fs_1.mkdir(path_1.resolve(pathStack[0], payload[0]), () => createChild(payload.slice(1), onComplete));
                }
            };
            createChild(payload, directoryCreated);
        }));
        this.on = (event, handle) => {
            this.emitter.on(event, handle);
        };
        this.watch = (options) => {
            this.watcher = chokidar_1.default.watch(this.path, options);
            this.watcher.on('all', (event, path, stats) => {
                const payload = { path, stats };
                const emit = (event) => this.emitter.emit(event, payload);
                if (event === 'add') {
                    emit('FILE_CREATED');
                }
                else if (event === 'change') {
                    emit('FILE_CHANGED');
                }
                else if (event === 'unlink') {
                    emit('FILE_REMOVED');
                }
                else if (event === 'addDir') {
                    emit('DIRECTORY_CREATED');
                }
                else if (event === 'unlinkDir') {
                    emit('DIRECTORY_REMOVED');
                }
            });
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
exports.default = Directory;
//# sourceMappingURL=index.js.map
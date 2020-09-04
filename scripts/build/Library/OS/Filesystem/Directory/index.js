"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const FsNode_1 = __importDefault(require("../../../OS/Filesystem/FsNode"));
const File_1 = __importDefault(require("../../../OS/Filesystem/File"));
const path_1 = require("path");
const Operation_1 = require("./Operation");
const Watcher_1 = __importDefault(require("../Watcher"));
const Text_1 = __importDefault(require("../../../Text"));
class Directory extends FsNode_1.default {
    constructor({ path }) {
        super({ path });
        this.children = (onComplete) => {
            fs_1.readdir(this.path, (error, names) => {
                if (error) {
                    throw error;
                }
                else {
                    const files = [];
                    const directories = [];
                    names.forEach(name => {
                        const fsNode = new FsNode_1.default({ path: path_1.resolve(this.path, name) });
                        fsNode.stats(stats => {
                            if (stats.isDirectory()) {
                                directories.push(new Directory({ path: fsNode.path }));
                            }
                            else {
                                files.push(new File_1.default({ path: fsNode.path }));
                            }
                            if (names.length === files.length + directories.length) {
                                onComplete({ directories, files });
                            }
                        });
                    });
                }
            });
        };
        this.child = (name, onReady) => this.children(({ files, directories }) => onReady(files.find(file => file.name === name) ||
            directories.find(directory => directory.name === name)));
        this.files = (onReady) => this.children(({ files }) => onReady(files));
        this.directories = (onReady) => this.children(({ directories }) => onReady(directories));
        this.resolve = (...segments) => path_1.resolve(this.path, ...segments);
        this.file = (name) => new File_1.default({ path: this.resolve(name) });
        this.directory = (name) => new Directory({ path: this.resolve(name) });
        this.create = (onComplete) => Operation_1.create(this.path, onComplete);
        this.remove = (onComplete) => Operation_1.remove(this.path, onComplete);
        this.copy = (target, onComplete) => Operation_1.copy(this.path, target, onComplete);
        this.on = (event, handle) => this.watcher.on(event, handle);
        this.watch = (options) => this.watcher.watch(options);
        this.unwatch = () => this.watcher.unwatch();
        this.virtual = (path) => path.substring(this.path.length);
        this.mount = (virtual) => this.resolve(this.path, Text_1.default.removePrefix(virtual, path_1.sep));
        this.watcher = new Watcher_1.default({ path });
    }
}
exports.default = Directory;
//# sourceMappingURL=index.js.map
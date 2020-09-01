"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chokidar_1 = __importDefault(require("chokidar"));
const events_1 = require("events");
const File_1 = __importDefault(require("./File"));
const Directory_1 = __importDefault(require("./Directory"));
class Watcher {
    constructor({ path }) {
        this.emitter = new events_1.EventEmitter;
        this.on = (event, handle) => {
            this.emitter.on(event, handle);
        };
        this.watch = (options) => {
            this.stream = chokidar_1.default.watch(this.path, options);
            this.stream.once('ready', () => this.stream.on('all', (event, path) => {
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
                    this.emitter.emit('DIRECTORY_CREATED', new Directory_1.default({ path }));
                }
                else if (event === 'unlinkDir') {
                    this.emitter.emit('DIRECTORY_REMOVED', new Directory_1.default({ path }));
                }
            }));
        };
        this.unwatch = () => this.stream.close();
        this.path = path;
    }
}
exports.default = Watcher;
//# sourceMappingURL=Watcher.js.map
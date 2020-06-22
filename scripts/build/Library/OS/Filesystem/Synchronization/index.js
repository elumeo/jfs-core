"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Directory_1 = __importDefault(require("../../../OS/Filesystem/Directory"));
class Synchronization {
    constructor({ from, to }) {
        this.equalize = onComplete => {
            this.from.copy(this.to.path, onComplete);
        };
        this.watch = () => {
            this.from.watch();
            this.from.watcher.once('ready', () => this.from.watcher.on('all', (eventName, path) => this.equalize(() => {
                const eventIndicator = (eventName) => {
                    if (eventName === 'add') {
                        return '+File';
                    }
                    else if (eventName === 'change') {
                        return '+File (UPDATE)';
                    }
                    else if (eventName === 'unlink') {
                        return '-File';
                    }
                    else if (eventName === 'addDir') {
                        return '+Directory';
                    }
                    else if (eventName === 'unlinkDir') {
                        return '-Directory';
                    }
                };
                console.log(new Directory_1.default({ path: this.from.parent }).name, this.from.name + path.substring(this.from.path.length), eventIndicator(eventName));
            })));
        };
        this.start = () => {
            if (this.from.exists() && this.to.exists()) {
                this.equalize(() => this.watch());
            }
        };
        this.from = from;
        this.to = to;
    }
}
exports.default = Synchronization;
//# sourceMappingURL=index.js.map
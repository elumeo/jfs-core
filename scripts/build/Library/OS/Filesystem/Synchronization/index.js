"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Directory_1 = __importDefault(require("../../../OS/Filesystem/Directory"));
const ansi_colors_1 = require("ansi-colors");
const File_1 = __importDefault(require("../File"));
const path_1 = require("path");
const eventIndicator = (eventName) => {
    if (eventName === 'add') {
        return ansi_colors_1.greenBright('+File');
    }
    else if (eventName === 'change') {
        return ansi_colors_1.greenBright('+File (UPDATE)');
    }
    else if (eventName === 'unlink') {
        return ansi_colors_1.redBright('-File');
    }
    else if (eventName === 'addDir') {
        return ansi_colors_1.greenBright('+Directory');
    }
    else if (eventName === 'unlinkDir') {
        return ansi_colors_1.redBright('-Directory');
    }
};
const print = (from, eventName, path) => {
    console.log(ansi_colors_1.yellowBright(new Directory_1.default({ path: from.parent }).name), ansi_colors_1.blueBright(from.name + path.substring(from.path.length)), eventIndicator(eventName));
};
class Synchronization {
    constructor({ from, to }) {
        this.equalize = onComplete => {
            this.from.copy(this.to.path, onComplete);
        };
        this.watch = () => {
            this.from.watch();
            this.from.watcher.once('ready', () => this.from.watcher.on('all', (eventName, path) => {
                setTimeout(() => {
                    if (['unlinkDir', 'addDir'].includes(eventName)) {
                        const directory = new Directory_1.default({
                            path: path_1.resolve(this.to.path, path.substring(this.from.path.length + 1))
                        });
                        if (eventName === 'unlinkDir') {
                            directory.remove(() => print(this.from, eventName, path));
                        }
                        else if (eventName === 'addDir') {
                            directory.create(() => print(this.from, eventName, path));
                        }
                    }
                    else if (['add', 'unlink', 'change'].includes(eventName)) {
                        const file = new File_1.default({
                            path: path_1.resolve(this.to.path, path.substring(this.from.path.length + 1))
                        });
                        if (eventName === 'add') {
                            file.create(() => print(this.from, eventName, path));
                        }
                        else if (eventName === 'unlink') {
                            file.remove(() => print(this.from, eventName, path));
                        }
                        else if (eventName === 'change') {
                            new File_1.default({ path }).copy(file.path, () => print(this.from, eventName, path));
                        }
                    }
                }, 200);
            }));
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
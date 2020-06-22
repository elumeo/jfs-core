"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Directory_1 = __importDefault(require("../../../OS/Filesystem/Directory"));
const ansi_colors_1 = require("ansi-colors");
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
                console.log(ansi_colors_1.yellowBright(new Directory_1.default({ path: this.from.parent }).name), ansi_colors_1.blueBright(this.from.name + path.substring(this.from.path.length)), eventIndicator(eventName));
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
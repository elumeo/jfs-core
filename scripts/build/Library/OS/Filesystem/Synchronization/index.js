"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = __importDefault(require("events"));
class Synchronization {
    constructor({ from, to }) {
        this.equalize = onComplete => {
            this.from.copy(this.to.path, onComplete);
        };
        this.watch = () => {
            this.from.watch();
            this.from.watcher.once('ready', () => this.from.watcher.on('all', (eventName, path, stats) => this.equalize(() => this.emit(eventName, { path, stats }))));
        };
        this.start = () => {
            if (this.from.exists() && this.to.exists()) {
                this.equalize(() => this.watch());
            }
        };
        this.emit = (eventName, payload) => this.emitter.emit(eventName, payload);
        this.on = (eventName, callback) => this.emitter.on(eventName, callback);
        this.from = from;
        this.to = to;
        this.emitter = new events_1.default;
    }
}
exports.default = Synchronization;
//# sourceMappingURL=index.js.map
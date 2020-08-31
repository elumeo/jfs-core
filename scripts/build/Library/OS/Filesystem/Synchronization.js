"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Directory_1 = __importDefault(require("./Directory"));
const File_1 = __importDefault(require("./File"));
const path_1 = require("path");
const Text_1 = __importDefault(require("../../Text"));
class Synchronization {
    constructor({ from, to, ignore }) {
        this.target = (source) => {
            const FsNode = (source instanceof File_1.default
                ? File_1.default
                : Directory_1.default);
            console.log({
                recipient: this.recipient.path,
                virtual: source.path.substring(this.sender.path.length),
                withoutPrefix: Text_1.default.removePrefix(source.path.substring(this.sender.path.length), '/'),
                recipientResource: path_1.resolve(this.recipient.path, Text_1.default.removePrefix(source.path.substring(this.sender.path.length), '/'))
            });
            return new FsNode({
                path: path_1.resolve(this.recipient.path, Text_1.default.removePrefix(source.path.substring(this.sender.path.length), '/'))
            });
        };
        this.run = (onSynchronized) => {
            const { sender, recipient, ignore } = this;
            sender.watch();
            Directory_1.default.events.forEach(event => sender.on(event, source => {
                const onComplete = () => onSynchronized({ event, source, target });
                const target = this.target(source);
                const ignored = ignore.includes(target.path.substring(recipient.path.length + 1).split(path_1.sep)[0]);
                if (ignored) {
                }
                else if (Text_1.default.endsWith(event, 'CREATED')) {
                    target.create(onComplete);
                }
                else if (Text_1.default.endsWith(event, 'REMOVED')) {
                    target.remove(onComplete);
                }
                else if (event === 'FILE_CHANGED') {
                    source.read(text => target.write(text, onComplete));
                }
            }));
        };
        this.sender = new Directory_1.default({ path: from });
        this.recipient = new Directory_1.default({ path: to });
        this.ignore = ignore || [];
    }
}
exports.default = Synchronization;
//# sourceMappingURL=Synchronization.js.map
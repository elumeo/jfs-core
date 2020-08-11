"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const FsNode_1 = __importDefault(require("./FsNode"));
const json_2_csv_1 = require("json-2-csv");
const path_1 = require("path");
class File extends FsNode_1.default {
    constructor() {
        super(...arguments);
        this.exists = () => fs_1.existsSync(this.path);
        this.create = (onComplete) => {
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
            fs_1.appendFile(this.path, '', (error) => {
                if (error) {
                    throw error;
                }
                else if (onComplete) {
                    onComplete();
                }
            });
        };
        this.read = (parameters) => {
            const shortSyntax = typeof parameters === 'function';
            const encoding = (shortSyntax
                ? 'utf8'
                : parameters.encoding);
            const onComplete = (shortSyntax
                ? parameters
                : parameters.onComplete);
            fs_1.readFile(this.path, encoding, (error, data) => {
                if (error) {
                    throw error;
                }
                else {
                    onComplete(data);
                }
            });
        };
        this.write = (data, onComplete) => {
            fs_1.writeFile(this.path, data, (error) => {
                if (error) {
                    throw error;
                }
                else if (onComplete) {
                    onComplete();
                }
            });
        };
        this.save = (json, onComplete) => {
            this.write(JSON.stringify(json, null, 2), onComplete);
        };
        this.remove = onComplete => this.exists() && fs_1.unlink(this.path, (error) => {
            if (error) {
                throw error;
            }
            else if (onComplete) {
                onComplete();
            }
        });
        this.copy = (path, onComplete) => this.read(data => {
            const newFile = new File({ path });
            newFile.write(data, () => onComplete(newFile));
        });
        this.move = (path, onComplete) => this.copy(path, file => onComplete(file));
        this.update = ({ patcher, onComplete }) => this.read(data => this.write(patcher(data), onComplete));
        this.json = (onComplete) => this.read(data => onComplete(JSON.parse(data)));
        this.csv = (onComplete) => this.read(data => json_2_csv_1.csv2json(data, (error, data) => {
            if (error) {
                throw error;
            }
            else {
                onComplete(data);
            }
        }));
    }
}
File.removeExtension = (path) => path.substring(0, path.lastIndexOf('.'));
exports.default = File;
//# sourceMappingURL=File.js.map
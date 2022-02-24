"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./App"));
const Core_1 = __importDefault(require("./Core"));
const Component_1 = __importDefault(require("./Component"));
const Package_1 = __importDefault(require("../Node/Package"));
const Text_1 = __importDefault(require("../Text"));
const path_1 = require("path");
class JFS {
}
JFS.Core = null;
JFS.projects = [];
JFS.project = (nodePackage, onComplete) => {
    const path = nodePackage.file.parent;
    nodePackage.json(({ name }) => {
        if (name === '@elumeo/jfs-core') {
            onComplete(new Core_1.default({ path }));
        }
        else if (Text_1.default.beginsWith(name, 'jfc')) {
            onComplete(new Component_1.default({ path }));
        }
        else if (Text_1.default.beginsWith(name, 'jfs')) {
            onComplete(new App_1.default({ path }));
        }
    });
};
JFS.head = () => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const path = process.cwd();
        const nodePackage = new Package_1.default(Package_1.default.location(process.cwd()));
        nodePackage.json(({ name }) => {
            if (name === '@elumeo/jfs-core') {
                resolve(new Core_1.default({ path }));
            }
            else if (Text_1.default.beginsWith(name, '@scharfohnezwiebeln/jfc')) {
                resolve(new Component_1.default({ path }));
            }
            else if (Text_1.default.beginsWith(name, 'jfs')) {
                resolve(new App_1.default({ path }));
            }
            else {
                reject('No valid head found for jfs.');
            }
        });
    });
});
JFS.discover = (onComplete) => {
    JFS.head().then(head => {
        JFS.Head = head;
        if (head instanceof Component_1.default || head instanceof App_1.default) {
            JFS.Core = new Core_1.default({
                path: path_1.resolve(head.path, 'node_modules', '@elumeo', 'jfs-core')
            });
            head.nodePackage.json(({ dependencies }) => {
                JFS.projects = [
                    JFS.Head,
                    JFS.Core,
                    ...(Object.keys(dependencies)
                        .filter(key => Text_1.default.beginsWith(key, 'jfc'))
                        .map(key => new Component_1.default({
                        path: path_1.resolve(head.path, 'node_modules', key)
                    })))
                ];
                onComplete();
            });
        }
        else if (head instanceof Core_1.default) {
            JFS.Core = head;
            onComplete();
        }
    });
};
exports.default = JFS;
//# sourceMappingURL=index.js.map
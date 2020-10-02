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
const Process_1 = __importDefault(require("../Library/OS/Process"));
const JFS_1 = __importDefault(require("../Library/JFS"));
const fs_1 = __importDefault(require("fs"));
const Directory_1 = __importDefault(require("../Library/OS/Filesystem/Directory"));
const install = (path) => new Promise((resolve, reject) => {
    const installer = new Process_1.default({
        command: 'npm',
        parameters: ['i'],
        options: {
            cwd: path,
            stdio: 'inherit'
        }
    });
    installer.run(instance => {
        instance.on('exit', code => {
            if (code === 0) {
                resolve();
            }
            else {
                reject();
            }
        });
        process.on('exit', () => {
            instance.kill();
        });
    });
});
const start = (path, onSpawn) => {
    const server = new Process_1.default({
        command: 'npm',
        parameters: ['start'],
        options: {
            cwd: path,
            stdio: 'inherit'
        }
    });
    server.run(onSpawn);
};
JFS_1.default.discover(() => __awaiter(void 0, void 0, void 0, function* () {
    const showcase = new Directory_1.default({
        path: JFS_1.default.Core.directory.resolve('showcase')
    });
    const installed = fs_1.default.existsSync(showcase.resolve('node_modules'));
    if (installed) {
        start(showcase.path);
    }
    else {
        yield install(showcase.path);
        start(showcase.path);
    }
}));
//# sourceMappingURL=jfs-showcase.js.map
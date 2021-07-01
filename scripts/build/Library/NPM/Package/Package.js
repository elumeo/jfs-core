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
exports.start = exports.run = exports.save = exports.json = exports.node_module = void 0;
const path_1 = require("path");
const fs_extra_1 = __importDefault(require("fs-extra"));
const child_process_1 = __importDefault(require("child_process"));
const node_module = (path, name) => path_1.resolve(path, 'node_modules', name);
exports.node_module = node_module;
const json = (path) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield fs_extra_1.default.readJSON(path));
});
exports.json = json;
const save = (path, json) => __awaiter(void 0, void 0, void 0, function* () {
    const data = JSON.stringify(json, null, 2);
    yield fs_extra_1.default.writeFile(path, data);
});
exports.save = save;
const run = (script, options = {}, onSpawn) => {
    const command = process.platform === 'win32' ? 'npm.cmd' : 'npm';
    const argv = ['run', script];
    const child = child_process_1.default.spawn(command, argv, options);
    if (onSpawn) {
        onSpawn(child);
    }
    return new Promise(resolve => child.on('exit', resolve));
};
exports.run = run;
const start = (path) => exports.run('start', {
    cwd: path,
    stdio: 'inherit'
});
exports.start = start;
//# sourceMappingURL=Package.js.map
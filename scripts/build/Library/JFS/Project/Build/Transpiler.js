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
exports.stop = exports.run = exports.running = exports.child = void 0;
const ansi_colors_1 = require("ansi-colors");
const child_process_1 = __importDefault(require("child_process"));
const path_1 = require("path");
exports.child = null;
const run = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const tsc = path_1.resolve(path, 'node_modules', 'typescript', 'bin', 'tsc');
    exports.child = child_process_1.default.spawn('node', [tsc], {
        cwd: path,
        stdio: 'inherit'
    });
    exports.running = true;
    exports.child.on('exit', code => {
        exports.running = false;
        if (!code) {
            console.log(ansi_colors_1.green('No type errors found.'));
        }
        path_1.resolve();
    });
});
exports.run = run;
const stop = () => exports.running && (exports.child === null || exports.child === void 0 ? void 0 : exports.child.kill(`SIGKILL`));
exports.stop = stop;
//# sourceMappingURL=Transpiler.js.map
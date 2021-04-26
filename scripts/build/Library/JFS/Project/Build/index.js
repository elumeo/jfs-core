"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.watch = exports.single = exports.compile = exports.synchronize = exports.run = void 0;
const path_1 = require("path");
const Transpiler = __importStar(require("./Transpiler"));
const Format = __importStar(require("./Format"));
const Text = __importStar(require("../../../Text"));
const ansi_colors_1 = require("ansi-colors");
const fs_extra_1 = __importDefault(require("fs-extra"));
const chokidar_1 = __importDefault(require("chokidar"));
const run = (path, _watch) => {
    console.log(`Running build in ${_watch ? 'watch' : 'single'} mode`);
    if (_watch) {
        exports.watch(path);
    }
    else {
        exports.single(path);
    }
};
exports.run = run;
// export const equalize = async (path: string) => {
//   const src = resolve(path, 'src');
//   const build = resolve(path, 'build');
//   const paths = await readdir(src, ['*.ts', '*.tsx']);
//   const copied = [];
//   if (paths.length) {
//     paths.map(async path => {
//       const virtual = path.substring(src.length);
//       await fs.copyFile(
//         path,
//         resolve(build, Text.Prefix.remove(virtual, sep))
//       );
//       copied.push(path);
//       const progress = `(${copied.length}/${paths.length})`;
//       console.log(`${cyan('Equalized')}: ${virtual} ${progress}`);
//       if (copied.length === paths.length) {
//         resolve();
//       }
//     })
//   }
// };
const synchronize = (path, event, source) => __awaiter(void 0, void 0, void 0, function* () {
    const src = path_1.resolve(path, 'src');
    const build = path_1.resolve(path, 'build');
    const virtual = path.substring(src.length);
    if (event === 'unlink') {
        yield fs_extra_1.default.unlink(source);
    }
    else if (event === 'add' || event === 'change') {
        const resource = path_1.resolve(build, Text.Prefix.remove(virtual, path_1.sep));
        fs_extra_1.default.copyFile(source, resource);
    }
    console.log(`${ansi_colors_1.cyan(event)}: ${virtual}`);
});
exports.synchronize = synchronize;
const compile = (path) => new Promise((resolve) => __awaiter(void 0, void 0, void 0, function* () {
    Transpiler.stop();
    yield Transpiler.run(path);
    yield Format.apply(path);
    resolve();
}));
exports.compile = compile;
const single = (path) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve) => __awaiter(void 0, void 0, void 0, function* () {
        // await equalize(path);
        console.log('Compiling ...');
        yield exports.compile(path);
        resolve();
    }));
});
exports.single = single;
const watch = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const watcher = chokidar_1.default.watch(path_1.resolve(path, 'src'));
    yield exports.single(path);
    watcher.once('ready', () => watcher.on('all', (event, source) => __awaiter(void 0, void 0, void 0, function* () {
        if (['.ts', '.tsx'].includes(path_1.extname(source))) {
            console.clear();
            console.log('Recompiling ...');
            yield exports.compile(path);
        }
        else {
            console.clear();
            console.log('Synchronizing ...');
            yield exports.synchronize(path, event, source);
            yield exports.compile(path);
        }
    })));
});
exports.watch = watch;
//# sourceMappingURL=index.js.map
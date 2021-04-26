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
const path_1 = require("path");
const JFS = __importStar(require("../Library/JFS"));
const ansi_colors_1 = require("ansi-colors");
const Script_1 = __importDefault(require("../Library/JFS/Core/Script"));
const Package = __importStar(require("../Library/NPM/Package"));
const chokidar_1 = __importDefault(require("chokidar"));
const Text = __importStar(require("../Library/Text"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    const { type } = yield JFS.discover(process.cwd());
    if (type === 'core') {
        console.log('sync-development can not be run from the core');
        process.exit(1);
    }
    else if (type === 'app') {
        // JFS.Head.discover(
        //   () => {
        //     console.log({
        //       Core: JFS.Core,
        //       Components: (JFS.Head as App).components,
        //       App: JFS.Head
        //     });
        //   }
        // );
    }
    else if (type === 'component') {
        // console.log({
        //   Core: JFS.Core,
        //   Component: JFS.Head,
        // });
    }
    const { jfs } = yield Package.json(path_1.resolve(process.cwd(), 'package.json'));
    if (jfs) {
        console.log('Synchronization');
        Object.keys(jfs.sync).map(name => {
            console.log(`- ${name} => ${jfs.sync[name]}`);
            const from = path_1.resolve(process.cwd(), jfs.sync[name]).replace('/', path_1.sep);
            const to = path_1.resolve(process.cwd(), 'node_modules', name).replace('/', path_1.sep);
            const ignore = [
                'node_modules',
                '.git',
                '.idea'
            ];
            const format = (event, project, path) => {
                return `${ansi_colors_1.cyanBright(event)}: ${ansi_colors_1.magenta(project)}${path}`;
            };
            const watcher = chokidar_1.default.watch(from);
            const events = ['add', 'change', 'unlink', 'addDir', 'unlinkDir'];
            events.forEach(event => watcher.on(event, (event, source) => __awaiter(void 0, void 0, void 0, function* () {
                const target = path_1.resolve(to, Text.Prefix.remove(source.substring(from.length), path_1.sep));
                const ignored = ignore.includes(target.substring(to.length + 1).split(path_1.sep)[0]);
                if (ignored) {
                    return;
                }
                else if (event === 'add') {
                    yield fs_extra_1.default.writeFile(target, '');
                }
                else if (event === 'change') {
                    yield fs_extra_1.default.writeFile(target, yield fs_extra_1.default.readFile(source));
                }
                else if (event === 'unlink') {
                    yield fs_extra_1.default.unlink(target);
                }
                else if (event === 'addDir') {
                    yield fs_extra_1.default.mkdir(target);
                }
                else if (event === 'unlinkDir') {
                    yield fs_extra_1.default.rmdir(target);
                }
                const path = target.substring(to.length);
                const message = format(event, name, path);
                console.log(message);
            })));
        });
    }
    else {
        console.log('No jfs field found in package.json.');
    }
});
exports.default = new Script_1.default({
    path: __filename,
    name: 'sync-development',
    scope: ['app', 'jfc'],
    run
});
//# sourceMappingURL=sync-development.js.map
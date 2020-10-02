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
const JFS_1 = __importDefault(require("../Library/JFS"));
const Directory_1 = __importDefault(require("../Library/OS/Filesystem/Directory"));
const Text_1 = __importDefault(require("../Library/Text"));
const path_1 = require("path");
const Core_1 = __importDefault(require("../Library/JFS/Core"));
const Component_1 = __importDefault(require("../Library/JFS/Component"));
const App_1 = __importDefault(require("../Library/JFS/App"));
const scripts = (core) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise(resolve => {
        const directory = new Directory_1.default({
            path: core.directory.resolve('scripts', 'build', 'Setup')
        });
        directory.files(files => {
            resolve(files
                .filter(({ path }) => Text_1.default.endsWith(path, '.js'))
                .map(({ path }) => path)
                .map(path => path_1.relative(JFS_1.default.Head.path, path))
                .map(path => ({
                key: Text_1.default.removeSuffix(path_1.basename(path), path_1.extname(path)),
                command: `node ${path}`
            }))
                .filter(({ key }) => {
                const all = [
                    'check-translations',
                    'deploy-config-files',
                    'jfs-showcase',
                    'jsc-check',
                    'jsc-generate',
                    'register-scripts',
                    'set-peer-dependencies'
                ];
                const core = [
                    'jfs-build',
                    'generate-juwelo-icon-font'
                ];
                const jfc = [
                    'jfs-build',
                    'sync-development'
                ];
                const app = [
                    'sync-development',
                ];
                return (all.includes(key) ||
                    JFS_1.default.Head instanceof Core_1.default && core.includes(key) ||
                    JFS_1.default.Head instanceof Component_1.default && jfc.includes(key) ||
                    JFS_1.default.Head instanceof App_1.default && app.includes(key));
            })
                .reduce((previous, current) => (Object.assign(Object.assign({}, previous), { [current.key]: current.command }))));
        });
    });
});
JFS_1.default.discover(() => {
    const replaceJfsBuildByBuild = (scripts) => {
        scripts.build = scripts['jfs-build'];
        delete scripts['jfs-build'];
        return scripts;
    };
    JFS_1.default.Head.nodePackage.json((nodePackage) => __awaiter(void 0, void 0, void 0, function* () {
        return (JFS_1.default.Head.nodePackage.file.save(Object.assign(Object.assign({}, nodePackage), { scripts: Object.assign(Object.assign({}, nodePackage.scripts), replaceJfsBuildByBuild(yield scripts(JFS_1.default.Core))) }), () => {
            console.log(`Registered scripts from jfs-core`);
        }));
    }));
});
//# sourceMappingURL=register-scripts.js.map
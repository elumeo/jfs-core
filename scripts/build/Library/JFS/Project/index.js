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
const Directory_1 = __importDefault(require("../../OS/Filesystem/Directory"));
const Package_1 = __importDefault(require("../../Node/Package"));
const Config_1 = __importDefault(require("../../JFS/Config"));
const Text_1 = __importDefault(require("../../Text"));
const Translations_1 = __importDefault(require("./Translations"));
const Api_1 = __importDefault(require("./Api"));
const File_1 = __importDefault(require("../../OS/Filesystem/File"));
const path_1 = require("path");
const Build_1 = __importDefault(require("./Build"));
const Process_1 = __importDefault(require("../../OS/Process"));
const __1 = __importDefault(require(".."));
class Project {
    constructor({ path }) {
        this.translations = (onComplete) => Translations_1.default.get(this.path, translations => onComplete(new Translations_1.default(translations)));
        this.build = (watch) => {
            console.log(`Running build in ${watch ? 'watch' : 'single'} mode`);
            if (watch) {
                Build_1.default.watch(this.directory);
            }
            else {
                Build_1.default.single(this.directory);
            }
        };
        this.setPeerDependencies = () => new Promise(resolve => {
            const child = new Process_1.default({
                command: process.platform === 'win32' ? 'npm.cmd' : 'npm',
                parameters: ['run', 'set-peer-dependencies'],
                options: {
                    cwd: this.path,
                    stdio: 'inherit'
                }
            });
            child.run(instance => instance.on('exit', resolve));
        });
        this.deployConfigFiles = () => new Promise(resolve => {
            const child = new Process_1.default({
                command: process.platform === 'win32' ? 'npm.cmd' : 'npm',
                parameters: ['run', 'deploy-config-files'],
                options: {
                    cwd: this.path,
                    stdio: 'inherit'
                }
            });
            child.run(instance => instance.on('exit', resolve));
        });
        this.registerScriptsPath = (core) => path_1.resolve(path_1.relative(this.path, core.path), 'scripts', 'build', 'Setup', 'register-scripts');
        this.addRegisterScripts = (core) => new Promise(resolve => {
            this.nodePackage.json(data => {
                if (!data.scripts['register-scripts']) {
                    this.nodePackage.file.save(Object.assign(Object.assign({}, data), { scripts: Object.assign(Object.assign({}, data.scripts), { 'register-scripts': `node ${this.registerScriptsPath(core)}` }) }), resolve);
                }
                else {
                    resolve();
                }
            });
        });
        this.registerScripts = () => new Promise(resolve => {
            const child = new Process_1.default({
                command: process.platform === 'win32' ? 'npm.cmd' : 'npm',
                parameters: ['run', 'register-scripts'],
                options: {
                    cwd: this.path,
                    stdio: 'inherit'
                }
            });
            child.run(instance => instance.on('exit', resolve));
        });
        this.parent = () => new Promise((resolvePromise) => __awaiter(this, void 0, void 0, function* () {
            const path = (this.path
                .split(path_1.sep)
                .reduce((paths, segment, index) => {
                return [
                    ...paths,
                    index
                        ? path_1.resolve(paths[index - 1], segment)
                        : process.platform === 'win32'
                            ? segment
                            : path_1.sep
                ];
            }, [])
                .filter(path => (path !== this.path &&
                new File_1.default({ path: path_1.resolve(path, 'package.json') }).exists())))[0];
            if (path) {
                const nodePackage = new Package_1.default(Package_1.default.location(path));
                __1.default.project(nodePackage, project => {
                    resolvePromise(project);
                });
            }
            else {
                return resolvePromise(null);
            }
        }));
        this.path = path;
        this.directory = new Directory_1.default({ path });
        this.name = this.directory.name;
        if (this.directory.name.substring('jfc-'.length) !== '') {
            this.name = this.directory.name
                .substring('jfc-'.length)
                .split('-')
                .map(Text_1.default.capitalize)
                .join('');
        }
        this.nodePackage = new Package_1.default(Package_1.default.location(path));
        this.JSC = new Api_1.default(Api_1.default.location(path));
        this.config = new Config_1.default(Config_1.default.location(path));
        this.tsconfig = new File_1.default({
            path: path_1.resolve(path, 'tsconfig.json')
        });
    }
}
exports.default = Project;
//# sourceMappingURL=index.js.map
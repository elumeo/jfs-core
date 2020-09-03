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
const Event_1 = __importDefault(require("../../../OS/Filesystem/Event"));
const File_1 = __importDefault(require("../../../OS/Filesystem/File"));
const path_1 = require("path");
const Transpiler_1 = __importDefault(require("./Transpiler"));
const Format_1 = __importDefault(require("./Format"));
const Text_1 = __importDefault(require("../../../Text"));
const ansi_colors_1 = require("ansi-colors");
const recursive_readdir_1 = __importDefault(require("recursive-readdir"));
class Build {
}
Build.equalize = (project) => {
    return new Promise((resolve) => __awaiter(void 0, void 0, void 0, function* () {
        const src = project.directory('src');
        const build = project.directory('build');
        const paths = yield recursive_readdir_1.default(src.path, ['*.ts', '*.tsx']);
        const files = paths.map(path => new File_1.default({ path }));
        const copied = [];
        if (files.length) {
            files.forEach(file => {
                const virtual = src.virtual(file.path);
                file.copy(build.mount(virtual), file => {
                    copied.push(file);
                    const progress = `(${copied.length}/${files.length})`;
                    console.log(`${ansi_colors_1.cyan('Equalized')}: ${virtual} ${progress}`);
                    if (copied.length === files.length) {
                        resolve();
                    }
                });
            });
        }
        else {
            resolve();
        }
    }));
};
Build.synchronize = (project, event, file) => new Promise(resolve => {
    const src = project.directory('src');
    const build = project.directory('build');
    const remove = Text_1.default.endsWith(event, 'REMOVED');
    const virtual = src.virtual(file.path);
    const path = build.mount(virtual);
    const onComplete = () => {
        console.log(`${ansi_colors_1.cyan(event)}: ${virtual}`);
        resolve();
    };
    if (remove) {
        new File_1.default({ path }).remove(onComplete);
    }
    else {
        file.copy(path, onComplete);
    }
});
Build.compile = (project) => new Promise((resolve) => __awaiter(void 0, void 0, void 0, function* () {
    if (Transpiler_1.default.running) {
        Transpiler_1.default.process.kill(`SIGKILL`);
    }
    yield Transpiler_1.default.run(project);
    yield Format_1.default.apply(project);
    resolve();
}));
Build.single = (project) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve) => __awaiter(void 0, void 0, void 0, function* () {
        yield Build.equalize(project);
        console.log('Compiling ...');
        yield Build.compile(project);
        resolve();
    }));
});
Build.watch = (project) => __awaiter(void 0, void 0, void 0, function* () {
    const src = project.directory('src');
    yield Build.single(project);
    Event_1.default.names.forEach(event => src.on(event, (fsNode) => __awaiter(void 0, void 0, void 0, function* () {
        if (fsNode instanceof File_1.default) {
            const file = fsNode;
            if (path_1.extname(file.path) === '.ts') {
                console.clear();
                console.log('Recompiling ...');
                yield Build.compile(project);
            }
            else {
                console.clear();
                console.log('Synchronizing ...');
                yield Build.synchronize(project, event, file);
                yield Build.compile(project);
            }
        }
    })));
    src.watch();
});
exports.default = Build;
//# sourceMappingURL=index.js.map
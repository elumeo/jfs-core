"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JFS_1 = __importDefault(require("../Library/JFS"));
const Process_1 = __importDefault(require("../Library/OS/Process"));
const path_1 = require("path");
const rif = require('replace-in-file');
const node_modules = path_1.resolve(__dirname, '..', '..', 'node_modules');
const copyfiles = path_1.resolve(node_modules, 'copyfiles', 'copyfiles');
const tscAlias = path_1.resolve(node_modules, 'tsc-alias', 'src', 'bin', 'index.js');
const Core_1 = __importDefault(require("../Library/JFS/Core"));
const Component_1 = __importDefault(require("../Library/JFS/Component"));
const App_1 = __importDefault(require("../Library/JFS/App"));
JFS_1.default.discover(() => {
    const types = {
        Core: Core_1.default,
        Component: Component_1.default,
        App: App_1.default
    };
    console.log(Object.keys(types).find(key => JFS_1.default.Head instanceof types[key]));
    JFS_1.default.Head.tsconfig.json(({ compilerOptions: { outDir } }) => {
        ['scss', 'json', 'woff', 'woff2'].forEach(extension => new Process_1.default({
            command: 'node',
            parameters: [copyfiles, '-u', '1', `src/**/*.${extension}`, outDir],
            options: { cwd: JFS_1.default.Head.path }
        }).run());
        rif.sync({
            files: [
                `./${outDir}/**/*.*s`
            ],
            from: /from 'Core/gm,
            to: 'from \'@elumeo/jfs-core/build'
        });
        new Process_1.default({
            command: 'node',
            parameters: [tscAlias, '-p', path_1.resolve(JFS_1.default.Head.path, 'tsconfig.json')],
            options: { cwd: JFS_1.default.Head.path }
        }).run(instance => instance.stdout.on('data', data => console.log(data.toString())));
    });
});
//# sourceMappingURL=jfs-prebuild.js.map
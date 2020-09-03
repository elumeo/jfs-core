"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rif = require('replace-in-file');
const Process_1 = __importDefault(require("../../../OS/Process"));
class Format {
}
Format.replaceCoreAlias = (project, onComplete) => {
    project.file('tsconfig.json').json(({ compilerOptions: { outDir } }) => {
        rif.sync({
            files: [
                `./${outDir}/**/*.*s`
            ],
            from: /from 'Core/gm,
            to: 'from \'@elumeo/jfs-core/build'
        });
        onComplete();
    });
};
Format.replaceAliases = (project, onComplete) => new Process_1.default({
    command: 'node',
    parameters: [
        project.resolve(process.argv[1], '..', '..', '..', 'node_modules', 'tsc-alias', 'src', 'bin', 'index.js'),
        '-p',
        project.resolve('tsconfig.json')
    ],
    options: { cwd: project.path }
}).run(instance => instance.on('exit', onComplete));
Format.apply = (project) => new Promise((resolve) => {
    Format.replaceCoreAlias(project, () => Format.replaceAliases(project, () => {
        resolve();
    }));
});
exports.default = Format;
//# sourceMappingURL=Format.js.map
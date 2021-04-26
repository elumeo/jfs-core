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
exports.apply = exports.replaceAliases = exports.replaceCoreAlias = void 0;
const rif = require('replace-in-file');
const child_process_1 = __importDefault(require("child_process"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = require("path");
const replaceCoreAlias = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const tsconfig = yield fs_extra_1.default.readJSON(path_1.resolve(path, 'tsconfig.json'));
    const { outDir } = tsconfig.compilerOptions;
    rif.sync({
        files: [
            `./${outDir}/**/*.*s`
        ],
        from: /from 'Core/gm,
        to: 'from \'@elumeo/jfs-core/build'
    });
});
exports.replaceCoreAlias = replaceCoreAlias;
const replaceAliases = (path) => {
    const command = 'node';
    const argv = [
        path_1.resolve(path, process.argv[1], '..', '..', '..', 'node_modules', 'tsc-alias', 'src', 'bin', 'index.js'),
        '-p',
        path_1.resolve(path, 'tsconfig.json')
    ];
    const options = { cwd: path };
    const child = child_process_1.default.spawn(command, argv, options);
    return new Promise(resolve => child.on('exit', resolve));
};
exports.replaceAliases = replaceAliases;
const apply = (path) => __awaiter(void 0, void 0, void 0, function* () {
    yield exports.replaceCoreAlias(path);
    yield exports.replaceAliases(path);
});
exports.apply = apply;
//# sourceMappingURL=Format.js.map
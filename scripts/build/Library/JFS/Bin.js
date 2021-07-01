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
exports.generate = exports.scripts = exports.files = exports.names = exports.script = exports.code = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const code = (script) => [
    '#!/usr/bin/env node',
    `const script = require('../build/Setup/${script.name}');`,
    "const { detect } = require('../build/Library/JFS/Environment');",
    "const cwd = process.cwd();",
    'const main = async () => script.run(await detect(cwd));',
    "main();"
].join('\n');
exports.code = code;
const script = (path) => Promise.resolve().then(() => __importStar(require(path)));
exports.script = script;
const names = (base) => __awaiter(void 0, void 0, void 0, function* () {
    const suffix = '.ts';
    return ((yield fs_extra_1.default.readdir(base))
        .map(name => name.substring(0, name.length - suffix.length)));
});
exports.names = names;
const files = (env) => __awaiter(void 0, void 0, void 0, function* () {
    const src = path_1.default.resolve(env.core, 'scripts', 'src', 'Setup');
    const build = path_1.default.resolve(env.core, 'scripts', 'build', 'Setup');
    return ((yield Promise.all((yield exports.names(src))
        .map(name => path_1.default.resolve(build, name))
        .map(exports.script))));
});
exports.files = files;
const scripts = (env) => __awaiter(void 0, void 0, void 0, function* () {
    return ((yield exports.files(env))
        .filter(file => (file.scope.includes('all') ||
        file.scope.includes(env.which)))
        .map(({ name }) => ({
        name,
        command: name
    })));
});
exports.scripts = scripts;
const generate = (env) => __awaiter(void 0, void 0, void 0, function* () {
    (yield exports.files(env)).map(script => fs_extra_1.default.writeFile(path_1.default.resolve(env.root, 'bin', script.name), exports.code(script)));
});
exports.generate = generate;
//# sourceMappingURL=Bin.js.map
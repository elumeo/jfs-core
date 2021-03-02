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
const File_1 = __importDefault(require("../Library/OS/Filesystem/File"));
const path_1 = __importDefault(require("path"));
const Component_1 = __importDefault(require("../Library/JFS/Component"));
const Core_1 = __importDefault(require("../Library/JFS/Core"));
const Script_1 = __importDefault(require("../Library/JFS/Core/Script"));
const filesNamesToCopy = [
    'tsconfig.app.json',
    'tsconfig.component.json',
    'tsconfig.core.json',
    'tslint.json',
    '.editorconfig',
    '.prettierconfig',
    '.prettierrc',
];
const run = () => JFS_1.default.discover(() => __awaiter(void 0, void 0, void 0, function* () {
    yield new Promise(resolve => (new File_1.default({ path: path_1.default.resolve(JFS_1.default.Core.path, 'build-tools', 'typescript', JFS_1.default.Head instanceof Core_1.default
            ? 'core.json'
            : JFS_1.default.Head instanceof Component_1.default
                ? 'shared-component.json'
                : 'app.json') })
        .copy(path_1.default.resolve(JFS_1.default.Head.path, 'tsconfig.json'), resolve)));
    yield new Promise(resolve => (new File_1.default({ path: path_1.default.resolve(JFS_1.default.Core.path, 'build-tools', 'typescript', 'tslint.json') })
        .copy(path_1.default.resolve(JFS_1.default.Head.path, 'tslint.json'), resolve)));
    yield new Promise(resolve => (new File_1.default({ path: path_1.default.resolve(JFS_1.default.Core.path, 'build-tools', 'editorconfig', '.editorconfig') })
        .copy(path_1.default.resolve(JFS_1.default.Head.path, '.editorconfig'), resolve)));
    yield new Promise(resolve => (new File_1.default({ path: path_1.default.resolve(JFS_1.default.Core.path, 'build-tools', 'prettier', '.prettierrc') })
        .copy(path_1.default.resolve(JFS_1.default.Head.path, '.prettierrc'), resolve)));
    yield new Promise(resolve => (new File_1.default({ path: path_1.default.resolve(JFS_1.default.Core.path, 'build-tools', 'prettier', '.prettierignore') })
        .copy(path_1.default.resolve(JFS_1.default.Head.path, '.prettierignore'), resolve)));
    console.log('ALL CONFIG FILES DEPLOYED');
}));
exports.default = new Script_1.default({
    path: __filename,
    name: 'deploy-config-files',
    scope: ['all'],
    run
});
//# sourceMappingURL=deploy-config-files.js.map
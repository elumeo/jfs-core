"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JFS_1 = __importDefault(require("../Library/JFS"));
const Directory_1 = __importDefault(require("../Library/OS/Filesystem/Directory"));
const path_1 = require("path");
const File_1 = __importDefault(require("../Library/OS/Filesystem/File"));
const Component_1 = __importDefault(require("../Library/JFS/Component"));
const filesNamesToCopy = [
    'tsconfig.json',
    'tslint.json',
    '.editorconfig',
    '.prettierconfig',
    '.prettierrc',
];
const updateCompilerOptions = (tsconfig, compilerOptions) => (Object.assign(Object.assign({}, tsconfig), { compilerOptions }));
const updatePaths = (tsconfig, paths) => updateCompilerOptions(tsconfig, Object.assign(Object.assign({}, tsconfig.compilerOptions), { paths }));
const removeAliasFromPaths = (tsconfig, alias) => updatePaths(tsconfig, Object.keys(tsconfig.compilerOptions.paths).reduce((paths, key) => (Object.assign(Object.assign({}, paths), (alias === key
    ? {}
    : { [key]: tsconfig.compilerOptions.paths[key] }))), {}));
JFS_1.default.discover(() => {
    new Directory_1.default({
        path: path_1.resolve(JFS_1.default.Core.path, 'settings')
    }).files(files => {
        const copiedFileNames = [];
        files
            .filter(file => filesNamesToCopy.includes(file.name))
            .forEach(file => {
            const onCopyComplete = () => {
                copiedFileNames.push(file.name);
                if (copiedFileNames.length === filesNamesToCopy.length) {
                    console.log('ALL CONFIG FILES DEPLOYED');
                }
            };
            if (JFS_1.default.Head instanceof Component_1.default && file.name === 'tsconfig.json') {
                file.json(tsconfig => {
                    new File_1.default({
                        path: path_1.resolve(JFS_1.default.Head.path, 'tsconfig.json')
                    }).save(removeAliasFromPaths(tsconfig, 'Core/*'), onCopyComplete);
                });
            }
            else {
                file.copy(path_1.resolve(JFS_1.default.Head.path, file.name), onCopyComplete);
            }
        });
    });
});
//# sourceMappingURL=deploy-config-files.js.map
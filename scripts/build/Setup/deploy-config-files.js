"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JFS_1 = __importDefault(require("../Library/JFS"));
const Directory_1 = __importDefault(require("../Library/OS/Filesystem/Directory"));
const path_1 = require("path");
const filesNamesToCopy = [
    'tsconfig.json',
    'tslint.json',
    '.editorconfig',
    '.prettierconfig',
    '.prettierrc',
];
JFS_1.default.discover(() => {
    new Directory_1.default({
        path: path_1.resolve(JFS_1.default.Core.path, 'settings')
    }).files(files => {
        const copiedFileNames = [];
        files
            .filter(file => filesNamesToCopy.includes(file.name))
            .forEach(file => file.copy(path_1.resolve(JFS_1.default.Head.path, file.name), () => {
            copiedFileNames.push(file.name);
            if (copiedFileNames.length === filesNamesToCopy.length) {
                console.log('ALL CONFIG FILES DEPLOYED');
            }
        }));
    });
});
//# sourceMappingURL=deploy-config-files.js.map
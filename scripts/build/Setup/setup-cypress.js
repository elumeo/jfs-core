"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JFS_1 = __importDefault(require("../Library/JFS"));
const Directory_1 = __importDefault(require("../Library/OS/Filesystem/Directory"));
const path_1 = require("path");
const Script_1 = __importDefault(require("../Library/JFS/Core/Script"));
const filesNamesToCopy = [
    'cypress',
    'cypress.json',
    'docker-compose-snapshots.yml',
    'Dockerfile',
    'Jenkinsfile',
];
const run = () => JFS_1.default.discover(() => {
    new Directory_1.default({
        path: path_1.resolve(JFS_1.default.Core.path, 'settings')
    }).files(files => {
        const copiedFileNames = [];
        files
            .filter(file => filesNamesToCopy.includes(file.name))
            .forEach(file => {
            file.copy(path_1.resolve(JFS_1.default.Head.path, file.name), () => {
                copiedFileNames.push(file.name);
                if (copiedFileNames.length === filesNamesToCopy.length) {
                    console.log('ALL CYPRESS RELATED FILES DEPLOYED');
                }
            });
        });
    });
});
exports.default = new Script_1.default({
    path: __filename,
    name: 'setup-cypress',
    scope: ['all'],
    run
});
//# sourceMappingURL=setup-cypress.js.map
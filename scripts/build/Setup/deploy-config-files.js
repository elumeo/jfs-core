"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JFS_1 = __importDefault(require("../Library/JFS"));
const Directory_1 = __importDefault(require("../Library/OS/Filesystem/Directory"));
const path_1 = require("path");
const Component_1 = __importDefault(require("../Library/JFS/Component"));
const Core_1 = __importDefault(require("../Library/JFS/Core"));
const App_1 = __importDefault(require("../Library/JFS/App"));
const Text_1 = __importDefault(require("../Library/Text"));
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
const run = () => JFS_1.default.discover(() => {
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
            if (Text_1.default.beginsWith(file.name, 'tsconfig.')) {
                const target = path_1.resolve(JFS_1.default.Head.path, 'tsconfig.json');
                const onComplete = () => { };
                const check = () => [
                    { pattern: 'app', type: App_1.default },
                    { pattern: 'component', type: Component_1.default },
                    { pattern: 'core', type: Core_1.default }
                ].reduce((isValid, { pattern, type }) => (isValid || (Text_1.default.between(file.name, 'tsconfig.', '.json') === pattern &&
                    JFS_1.default.Head instanceof type)), false);
                if (check()) {
                    file.copy(target, onComplete);
                }
            }
            else {
                file.copy(path_1.resolve(JFS_1.default.Head.path, file.name), onCopyComplete);
            }
        });
    });
});
exports.default = new Script_1.default({
    path: __filename,
    name: 'deploy-config-files',
    scope: ['all'],
    run
});
//# sourceMappingURL=deploy-config-files.js.map
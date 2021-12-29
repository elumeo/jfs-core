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
const Directory_1 = __importDefault(require("../Library/OS/Filesystem/Directory"));
const path_1 = require("path");
const Script_1 = __importDefault(require("../Library/JFS/Core/Script"));
const filesNamesToCopy = [
    'cypress.json',
    'docker-compose-snapshots.yml',
    'Dockerfile',
    'Jenkinsfile',
];
const cypressDirName = 'cypress';
const scriptsToRegister = {
    'test': 'node_modules/cypress/bin/cypress run-ct --env COMPARE_IMAGE_SNAPSHOTS=true',
    'test:open-ui': 'node_modules/cypress/bin/cypress open-ct --env COMPARE_IMAGE_SNAPSHOTS=true',
    'test:clearSnapshots': 'rm -rf cypress/snapshots/*',
    'test:updateSnapshots': 'npm run test:clearSnapshots && npm run test ### https://github.com/jaredpalmer/cypress-image-snapshot/issues/74 ### -> # node_modules/cypress/bin/cypress run-ct --env updateSnapshots=true',
    'test:docker': 'docker-compose -f docker-compose-snapshots.yml run app npm run --rm test',
    'test:docker:updateSnapshots': 'docker-compose -f docker-compose-snapshots.yml run --rm app npm run test:updateSnapshots'
};
const registerScripts = () => {
    JFS_1.default.Head.nodePackage.json((nodePackage) => __awaiter(void 0, void 0, void 0, function* () {
        JFS_1.default.Head.nodePackage.file.save(Object.assign(Object.assign({}, nodePackage), { scripts: Object.assign(Object.assign({}, nodePackage.scripts), scriptsToRegister) }), () => console.log(`Registered test runner scripts from jfs-core`));
    }));
};
const run = () => JFS_1.default.discover(() => {
    const dirExists = new Directory_1.default({ path: path_1.resolve(JFS_1.default.Head.path, cypressDirName) }).exists();
    const settingsDir = new Directory_1.default({ path: path_1.resolve(JFS_1.default.Core.path, 'settings') });
    if (!dirExists) {
        settingsDir.directory(cypressDirName).copy(path_1.resolve(JFS_1.default.Head.path, cypressDirName), () => {
            console.log('cypress directory deployed');
        });
    }
    settingsDir.files(files => {
        const copiedFileNames = [];
        files
            .filter(file => filesNamesToCopy.includes(file.name))
            .forEach(file => {
            file.copy(path_1.resolve(JFS_1.default.Head.path, file.name), () => {
                copiedFileNames.push(file.name);
                if (copiedFileNames.length === filesNamesToCopy.length) {
                    console.log('All cypress related config files deployed');
                }
            });
        });
    });
    registerScripts();
});
exports.default = new Script_1.default({
    path: __filename,
    name: 'setup-cypress',
    scope: ['all'],
    run
});
//# sourceMappingURL=setup-cypress.js.map
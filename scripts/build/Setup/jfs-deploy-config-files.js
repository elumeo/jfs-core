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
exports.run = exports.scope = exports.name = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
exports.name = 'jfs-deploy-config-files';
exports.scope = ['all'];
const tsconfig = (which) => {
    switch (which) {
        case 'core': return 'core.json';
        case 'component': return 'shared-component.json';
        case 'app': return 'app.json';
        default: return null;
    }
};
const eslintrc = (which) => {
    switch (which) {
        case 'core': return 'core.eslintrc';
        case 'component': return 'component.eslintrc';
        case 'app': return 'app.eslintrc';
        default: return null;
    }
};
const run = (env) => __awaiter(void 0, void 0, void 0, function* () {
    const typescript = path_1.default.resolve(env.core, 'build-tools', 'typescript');
    const eslint = path_1.default.resolve(env.core, 'build-tools', 'eslint');
    const cypress = path_1.default.resolve(env.core, 'build-tools', 'cypress');
    const copy = [
        {
            from: path_1.default.resolve(typescript, tsconfig(env.which)),
            to: path_1.default.resolve(process.cwd(), 'tsconfig.json')
        },
        {
            from: path_1.default.resolve(eslint, eslintrc(env.which)),
            to: path_1.default.resolve(process.cwd(), '.eslintrc')
        },
        {
            from: path_1.default.resolve(cypress, 'cypress.json'),
            to: path_1.default.resolve(process.cwd(), 'cypress.json')
        },
        ...['cypress.json', 'Dockerfile', 'docker-compose-test.yml'].map(fileName => ({
            from: path_1.default.resolve(cypress, fileName),
            to: path_1.default.resolve(process.cwd(), fileName)
        }))
    ];
    yield Promise.all(copy.map(({ from, to }) => fs_extra_1.default.copyFile(from, to)));
});
exports.run = run;
//# sourceMappingURL=jfs-deploy-config-files.js.map
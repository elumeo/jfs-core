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
const JFS = __importStar(require("../Library/JFS"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const Script_1 = __importDefault(require("../Library/JFS/Core/Script"));
const tsconfig = () => __awaiter(void 0, void 0, void 0, function* () {
    const { type } = yield JFS.discover(process.cwd());
    switch (type) {
        case 'core': return 'core.json';
        case 'component': return 'shared-component.json';
        case 'app': return 'app.json';
        default: return null;
    }
    ;
});
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    const { core } = yield JFS.discover(process.cwd());
    const tools = path_1.default.resolve(core, 'build-tools');
    const typescript = path_1.default.resolve(tools, 'typescript');
    const editorconfig = path_1.default.resolve(tools, 'editorconfig');
    const prettier = path_1.default.resolve(tools, 'prettier');
    const copy = [
        {
            from: path_1.default.resolve(typescript, yield tsconfig()),
            to: path_1.default.resolve(process.cwd(), 'tsconfig.json')
        },
        {
            from: path_1.default.resolve(typescript, 'tslint.json'),
            to: path_1.default.resolve(process.cwd(), 'tslint.json')
        },
        {
            from: path_1.default.resolve(editorconfig, '.editorconfig'),
            to: path_1.default.resolve(process.cwd(), '.editorconfig'),
        },
        {
            from: path_1.default.resolve(prettier, '.prettierrc'),
            to: path_1.default.resolve(process.cwd(), '.prettierrc')
        },
        {
            from: path_1.default.resolve(prettier, '.prettierignore'),
            to: path_1.default.resolve(process.cwd(), '.prettierignore')
        }
    ];
    yield Promise.all(copy.map(({ from, to }) => fs_extra_1.default.copyFile(from, to)));
    console.log('ALL CONFIG FILES DEPLOYED');
});
exports.default = new Script_1.default({
    path: __filename,
    name: 'deploy-config-files',
    scope: ['all'],
    run
});
//# sourceMappingURL=deploy-config-files.js.map
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
const fs_1 = __importDefault(require("fs"));
const Script_1 = __importDefault(require("../Library/JFS/Core/Script"));
const path_1 = require("path");
const Package = __importStar(require("../Library/NPM/Package"));
const install = (path) => {
    const options = {
        cwd: path,
        stdio: 'inherit'
    };
    const onSpawn = (child) => process.on('exit', () => child.kill());
    return Package.run('install', options, onSpawn);
};
const start = (path) => Package.start(path);
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    const { core } = yield JFS.discover(process.cwd());
    const showcase = path_1.resolve(core, 'showcase');
    const installed = fs_1.default.existsSync(path_1.resolve(showcase, 'node_modules'));
    if (installed) {
        start(showcase);
    }
    else {
        yield install(showcase);
        start(showcase);
    }
});
exports.default = new Script_1.default({
    path: __filename,
    name: 'core-showcase',
    scope: ['all'],
    run
});
//# sourceMappingURL=jfs-showcase.js.map
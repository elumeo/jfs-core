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
const Text = __importStar(require("../Library/Text"));
const path_1 = require("path");
const Script_1 = __importDefault(require("../Library/JFS/Core/Script"));
const Package = __importStar(require("../Library/NPM/Package"));
const fs_extra_1 = __importStar(require("fs-extra"));
const script = (force = false) => new Script_1.default({
    path: __filename,
    name: 'register-scripts',
    scope: ['all'],
    run,
    force
});
const scope = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const { type } = yield JFS.discover(path);
    return (type === 'component'
        ? 'jfc'
        : type);
});
const files = () => __awaiter(void 0, void 0, void 0, function* () {
    const names = yield fs_extra_1.default.readdir(__dirname);
    const paths = names.map(name => path_1.resolve(__dirname, name));
    const match = (path) => __awaiter(void 0, void 0, void 0, function* () {
        const stat = yield fs_extra_1.lstat(path);
        return {
            path,
            match: stat.isFile()
        };
    });
    const matches = ((yield Promise.all(paths.map(match)))
        .filter(({ match }) => match)
        .map(({ path }) => path));
    return matches;
});
const names = (files) => (files
    .filter(path => Text.Suffix.match(path, '.js') && path !== __filename)
    .map(path => path_1.basename(path))
    .map(name => Text.Suffix.remove(name, '.js')));
const imports = (names) => (names.map((name) => __awaiter(void 0, void 0, void 0, function* () { return (yield Promise.resolve().then(() => __importStar(require(`./${name}`)))).default; })));
const extract = () => __awaiter(void 0, void 0, void 0, function* () { return imports(names(yield files())); });
const merge = (path, scripts) => __awaiter(void 0, void 0, void 0, function* () {
    const matches = scripts.map((script) => __awaiter(void 0, void 0, void 0, function* () {
        return ({
            path,
            script,
            match: (script.scope.includes(yield scope(path)) ||
                script.scope.includes('all')),
        });
    }));
    return ((yield Promise.all(matches))
        .reduce((scripts, { path, match, script }) => (match
        ? Object.assign(Object.assign({}, scripts), { [script.name]: `node ${path_1.relative(path, script.path).replaceAll('\\', '/')}` }) : scripts), {}));
});
const scripts = (path, scripts = [script()]) => new Promise((resolve) => __awaiter(void 0, void 0, void 0, function* () {
    return ((yield extract())
        .forEach((script) => __awaiter(void 0, void 0, void 0, function* () {
        scripts.push(yield script);
        if (scripts.length === imports(yield names(yield files())).length + 1) {
            resolve(merge(path, scripts));
        }
    })));
}));
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    const path = path_1.resolve(process.cwd(), 'package.json');
    const current = yield Package.json(path);
    yield fs_extra_1.default.writeJSON(path, Object.assign(Object.assign({}, current), { scripts: Object.assign(Object.assign({}, current.scripts), (yield scripts(process.cwd()))) }));
    console.log(`Registered scripts from jfs-core`);
});
exports.default = script(true);
//# sourceMappingURL=register-scripts.js.map
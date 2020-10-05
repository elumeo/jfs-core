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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
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
const JFS_1 = __importDefault(require("../Library/JFS"));
const Directory_1 = __importDefault(require("../Library/OS/Filesystem/Directory"));
const Text_1 = __importDefault(require("../Library/Text"));
const path_1 = require("path");
const Core_1 = __importDefault(require("../Library/JFS/Core"));
const Component_1 = __importDefault(require("../Library/JFS/Component"));
const Script_1 = __importDefault(require("../Library/JFS/Core/Script"));
const App_1 = __importDefault(require("../Library/JFS/App"));
const script = (force = false) => new Script_1.default({
    path: __filename,
    name: 'register-scripts',
    scope: ['all'],
    run,
    force
});
const scope = (head) => (head instanceof Core_1.default
    ? 'core'
    : head instanceof Component_1.default
        ? 'jfc'
        : head instanceof App_1.default
            ? 'app'
            : null);
const files = () => new Promise(resolve => (new Directory_1.default({ path: __dirname })
    .files(resolve)));
const names = (files) => (files
    .filter(({ path }) => Text_1.default.endsWith(path, '.js') && path !== __filename)
    .map(({ path }) => path_1.basename(path))
    .map(name => Text_1.default.removeSuffix(name, '.js')));
const imports = (names) => (names.map((name) => __awaiter(void 0, void 0, void 0, function* () { return (yield Promise.resolve().then(() => __importStar(require(`./${name}`)))).default; })));
const extract = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield imports(yield names(yield files()));
});
const add = (anker, scripts, script) => (Object.assign(Object.assign({}, scripts), { [script.name]: `node ${path_1.relative(anker, script.path).replace('\\', '/')}` }));
const match = (head, script) => (script.scope.includes(scope(head)) ||
    script.scope.includes('all'));
const collect = (head) => (scripts, script) => {
    if (match(head, script)) {
        return add(head.path, scripts, script);
    }
    else {
        return scripts;
    }
};
const merge = (head, scripts) => scripts.reduce(collect(head), {});
const scripts = (head, scripts = [script()]) => new Promise((resolve) => __awaiter(void 0, void 0, void 0, function* () {
    return ((yield extract())
        .forEach((script) => __awaiter(void 0, void 0, void 0, function* () {
        scripts.push(yield script);
        if (scripts.length === imports(yield names(yield files())).length + 1) {
            resolve(merge(head, scripts));
        }
    })));
}));
const run = () => JFS_1.default.discover(() => __awaiter(void 0, void 0, void 0, function* () {
    JFS_1.default.Head.nodePackage.json((nodePackage) => __awaiter(void 0, void 0, void 0, function* () {
        JFS_1.default.Head.nodePackage.file.save(Object.assign(Object.assign({}, nodePackage), { scripts: Object.assign(Object.assign({}, nodePackage.scripts), (yield scripts(JFS_1.default.Head))) }), () => console.log(`Registered scripts from jfs-core`));
    }));
}));
exports.default = script(true);
//# sourceMappingURL=register-scripts.js.map
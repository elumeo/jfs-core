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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRegisterScripts = exports.addPostinstallScript = exports.scriptPath = exports.registerScripts = exports.deployConfigFiles = exports.setPeerDependencies = void 0;
const Package = __importStar(require("../../NPM/Package"));
const path_1 = require("path");
const fs = __importStar(require("fs-extra"));
const setPeerDependencies = (path) => (Package.run('set-peer-dependencies', {
    cwd: path,
    stdio: 'inherit'
}));
exports.setPeerDependencies = setPeerDependencies;
const deployConfigFiles = (path) => (Package.run('deploy-config-files', {
    cwd: path,
    stdio: 'inherit'
}));
exports.deployConfigFiles = deployConfigFiles;
const registerScripts = (path) => (Package.run('register-scripts', {
    cwd: path,
    stdio: 'inherit'
}));
exports.registerScripts = registerScripts;
const scriptPath = (path, core, name) => path_1.join(path_1.relative(path, core), 'scripts', 'build', 'Setup', name).replace(path_1.sep, '/');
exports.scriptPath = scriptPath;
const addPostinstallScript = (path, core) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = (yield Package.json(path_1.resolve(path, 'package.json'))), { scripts } = _a, json = __rest(_a, ["scripts"]);
    if (!scripts['jfs-postinstall']) {
        yield fs.writeJSON(path, Object.assign(Object.assign({}, json), { scripts: Object.assign(Object.assign({}, scripts), { 'jfs-postinstall': `node ${exports.scriptPath(path, core, 'postinstall')}` }) }));
    }
});
exports.addPostinstallScript = addPostinstallScript;
const addRegisterScripts = (path, core) => __awaiter(void 0, void 0, void 0, function* () {
    const _b = (yield Package.json(path_1.resolve(path, 'package.json'))), { scripts } = _b, json = __rest(_b, ["scripts"]);
    if (!scripts['register-scripts']) {
        yield fs.writeJSON(path, Object.assign(Object.assign({}, json), { scripts: Object.assign(Object.assign({}, scripts), { 'register-scripts': `node ${exports.scriptPath(path, core, 'register-scripts')}` }) }));
    }
});
exports.addRegisterScripts = addRegisterScripts;
//# sourceMappingURL=Package.js.map
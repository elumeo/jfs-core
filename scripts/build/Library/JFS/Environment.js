"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.detect = exports.components = exports.core = exports.which = void 0;
const Package = __importStar(require("../NPM/Package"));
const Text = __importStar(require("../Text"));
const path_1 = require("path");
const componentPattern = '@scharfohnezwiebeln/jfc';
const which = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = (yield Package.json((0, path_1.resolve)(path, 'package.json')));
    if (name === '@elumeo/jfs-core') {
        return 'core';
    }
    else if (name === '@elumeo/jfs-scripts') {
        return 'scripts';
    }
    else if (Text.Prefix.match(name, componentPattern)) {
        return 'component';
    }
    else if (Text.Prefix.match(name, 'jfs')) {
        return 'app';
    }
    else {
        return null;
    }
});
exports.which = which;
const core = (path) => __awaiter(void 0, void 0, void 0, function* () {
    switch (yield (0, exports.which)(path)) {
        case 'core': return path;
        case 'scripts': return (0, path_1.dirname)(path);
        case 'app':
        case 'component': return (0, path_1.resolve)(path, 'node_modules', '@elumeo', 'jfs-core');
        default: return null;
    }
});
exports.core = core;
const components = (path) => __awaiter(void 0, void 0, void 0, function* () {
    if ((yield (0, exports.which)(path)) === 'app') {
        return (Object
            .keys((yield Package.json((0, path_1.resolve)(path, 'package.json'))).dependencies)
            .filter(name => Text.Prefix.match(name, componentPattern))
            .map(jfc => Package.node_module(path, jfc)));
    }
    else {
        return [];
    }
});
exports.components = components;
const detect = (path) => __awaiter(void 0, void 0, void 0, function* () {
    return ({
        root: path,
        which: yield (0, exports.which)(path),
        core: yield (0, exports.core)(path),
        components: yield (0, exports.components)(path),
    });
});
exports.detect = detect;
//# sourceMappingURL=Environment.js.map
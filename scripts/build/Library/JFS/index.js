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
exports.config = exports.discover = exports.components = exports.core = exports.type = void 0;
const Package = __importStar(require("../NPM/Package"));
const Text = __importStar(require("../Text"));
const path_1 = require("path");
const fs_extra_1 = __importDefault(require("fs-extra"));
const type = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = (yield Package.json(path_1.resolve(path, 'package.json')));
    if (name === '@elumeo/jfs-core') {
        return 'core';
    }
    else if (Text.Prefix.match(name, 'jfc')) {
        return 'component';
    }
    else if (Text.Prefix.match(name, 'jfs')) {
        return 'app';
    }
    else {
        return null;
    }
});
exports.type = type;
const core = (path) => __awaiter(void 0, void 0, void 0, function* () {
    switch (yield exports.type(path)) {
        case 'core': return path;
        case 'app':
        case 'component': return path_1.resolve(path, 'node_modules', '@elumeo', 'jfs-core');
        default: return null;
    }
});
exports.core = core;
const components = (path) => __awaiter(void 0, void 0, void 0, function* () {
    return (Object
        .keys((yield Package.json(path_1.resolve(path, 'package.json'))).dependencies)
        .filter(name => Text.Prefix.match(name, 'jfc-'))
        .map(jfc => Package.node_module(path, jfc)));
});
exports.components = components;
const discover = (path) => __awaiter(void 0, void 0, void 0, function* () {
    return ({
        type: yield exports.type(path),
        core: yield exports.core(path),
        components: yield exports.components(path),
    });
});
exports.discover = discover;
const config = (path) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield fs_extra_1.default.readJSON(path_1.resolve(path, 'config.dist.json')));
});
exports.config = config;
//# sourceMappingURL=index.js.map
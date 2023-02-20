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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.scope = exports.name = void 0;
const Package = __importStar(require("../Library/NPM/Package"));
const path_1 = require("path");
const fs_extra_1 = __importDefault(require("fs-extra"));
exports.name = 'jfs-set-peer-dependencies';
exports.scope = ['app', 'component'];
const run = (env) => __awaiter(void 0, void 0, void 0, function* () {
    if (env.which !== 'core') {
        const { name, dependencies, devDependencies } = yield Package.json((0, path_1.resolve)(env.core, 'package.json'));
        const path = (0, path_1.resolve)(process.cwd(), 'package.json');
        const next = Object.assign(Object.assign({}, (yield Package.json((0, path_1.resolve)(process.cwd(), 'package.json')))), { peerDependencies: dependencies, devDependencies });
        yield fs_extra_1.default.writeJSON(path, next, {
            spaces: 2
        });
        console.log(`Added peerDependencies to package.json of ${name}`);
    }
});
exports.run = run;
//# sourceMappingURL=jfs-set-peer-dependencies.js.map
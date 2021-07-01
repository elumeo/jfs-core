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
exports.run = exports.scope = exports.name = void 0;
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const JFS = __importStar(require("../Library/JFS"));
const NPM = __importStar(require("../Library/NPM"));
const parent = (root) => {
    if (fs_extra_1.default.existsSync(path_1.default.resolve(root, 'package.json'))) {
        return root;
    }
    else if (root.split(path_1.default.sep).length > 1) {
        return parent(path_1.default.dirname(root));
    }
    else {
        return null;
    }
};
exports.name = 'jfs-postinstall';
exports.scope = ['all'];
const run = (env) => __awaiter(void 0, void 0, void 0, function* () {
    yield JFS.Package.register(env, yield JFS.Bin.scripts(env));
    yield NPM.Package.run('jfs-deploy-config-files', {
        stdio: 'inherit'
    });
    if (['app', 'component'].includes(env.which)) {
        yield NPM.Package.run('jfs-set-peer-dependencies');
    }
});
exports.run = run;
//# sourceMappingURL=jfs-postinstall.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.scope = exports.name = void 0;
const JFS = __importStar(require("../Library/JFS"));
const path_1 = require("path");
const ANSI = __importStar(require("ansi-colors"));
exports.name = 'jfs-check-translations';
exports.scope = ['all'];
const run = (env) => __awaiter(void 0, void 0, void 0, function* () {
    const path = path_1.resolve(env.root, 'src', 'Setup', 'Translations.json');
    if (yield JFS.Translations.Check.run(path)) {
        console.info(ANSI.bgGreenBright('All translations seem to be available!'));
    }
    else {
        console.warn(ANSI.bgRedBright('Some translations seem to be missing!'));
    }
});
exports.run = run;
//# sourceMappingURL=jfs-check-translation.js.map
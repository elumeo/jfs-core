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
const Check = __importStar(require("./jfs-check-translations"));
exports.name = 'jfs-read-translations';
exports.scope = ['all'];
const run = (env) => __awaiter(void 0, void 0, void 0, function* () {
    const path = path_1.resolve(env.root, 'src', 'Setup', 'Locale');
    const locales = yield JFS.Translations.Reader.Input.locales(path);
    const last = yield JFS.Translations.Snapshot.last(path_1.resolve(env.root, 'src', 'Setup'));
    const target = (JFS.Translations.Snapshot.File
        .path(path_1.resolve(env.root, 'src', 'Setup'), last.version, 'csv'));
    const table = yield JFS.Translations.Reader.Input.csv(target);
    const next = yield JFS.Translations.Reader.run(locales, table);
    yield JFS.Translations.Reader.Output.files(path, next);
    console.info(`Succeessfully added missing translations!`);
    yield Check.run(env);
});
exports.run = run;
//# sourceMappingURL=jfs-read-translations.js.map
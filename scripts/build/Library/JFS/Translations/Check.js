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
exports.run = void 0;
const Snapshot = __importStar(require("./Snapshot"));
const Table = __importStar(require("./Table"));
const File = __importStar(require("./File"));
const open_1 = __importDefault(require("open"));
const Locale = __importStar(require("./Locale"));
const path_1 = require("path");
const run = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const locales = yield Locale.all(path);
    const translations = locales.reduce((translations, locale) => (Object.assign(Object.assign({}, translations), { [locale.name]: locale.messages })), {});
    const missing = Table.missing(translations);
    const last = yield Snapshot.last((0, path_1.dirname)(path));
    const version = Snapshot.Version.next(last.version);
    const asset = yield File.asset(Table.get(translations, 'missing'), path, version);
    const first = last.version === null;
    const changed = !first && !Snapshot.Asset.equal(asset, last.asset);
    const outdated = (!first && !missing.length ||
        changed);
    if (outdated) {
        yield Snapshot.Asset.remove((0, path_1.dirname)(path));
    }
    if (missing.length && (first || changed)) {
        yield Snapshot.Asset.save((0, path_1.dirname)(path), version, asset);
        const html = Snapshot.File.path((0, path_1.dirname)(path), version, 'html');
        (0, open_1.default)(html);
    }
    else if (missing.length) {
        const html = Snapshot.File.path((0, path_1.dirname)(path), last.version, 'html');
        (0, open_1.default)(html);
    }
    return !Boolean(missing.length);
});
exports.run = run;
//# sourceMappingURL=Check.js.map
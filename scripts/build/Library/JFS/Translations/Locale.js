"use strict";
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
exports.all = exports.names = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const names = (base) => __awaiter(void 0, void 0, void 0, function* () {
    return ((yield fs_extra_1.default.readdir(base))
        .map(name => path_1.default.parse(name))
        .filter(({ ext }) => ext === '.json')
        .map(({ name }) => name));
});
exports.names = names;
const all = (base) => __awaiter(void 0, void 0, void 0, function* () {
    return ((yield exports.names(base))
        .map(name => ({
        name,
        messages: fs_extra_1.default.readJSON(path_1.default.resolve(base, `${name}.json`))
    })));
});
exports.all = all;
//# sourceMappingURL=Locale.js.map
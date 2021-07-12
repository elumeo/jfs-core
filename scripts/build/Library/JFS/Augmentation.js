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
exports.copy = exports.files = exports.base = void 0;
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const base = (env) => (path_1.default.resolve(env.core, 'augmentation'));
exports.base = base;
const files = (base) => __awaiter(void 0, void 0, void 0, function* () {
    return ((yield fs_extra_1.default.readdir(base))
        .map(name => ({
        path: path_1.default.resolve(base, name),
        name
    })));
});
exports.files = files;
const copy = (env, target) => __awaiter(void 0, void 0, void 0, function* () {
    return (Promise.all((yield exports.files(exports.base(env)))
        .map(file => fs_extra_1.default.copyFile(file.path, path_1.default.resolve(target, file.name)))));
});
exports.copy = copy;
//# sourceMappingURL=Augmentation.js.map
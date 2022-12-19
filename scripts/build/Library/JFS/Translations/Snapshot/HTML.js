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
exports.create = exports.injection = exports.remove = exports.save = exports.get = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const CSV = __importStar(require("./CSV"));
const File = __importStar(require("./File"));
const View = __importStar(require("./View"));
const get = (base) => __awaiter(void 0, void 0, void 0, function* () {
    const path = File.path(base, yield CSV.version(base), 'html');
    return (fs_extra_1.default.existsSync(path)
        ? yield fs_extra_1.default.readFile(path, 'utf8')
        : null);
});
exports.get = get;
const save = (base, version, html) => (fs_extra_1.default.writeFile(File.path(base, version, 'html'), html));
exports.save = save;
const remove = (base) => __awaiter(void 0, void 0, void 0, function* () {
    return (fs_extra_1.default.unlink(File.path(base, yield CSV.version(base), 'html')));
});
exports.remove = remove;
const injection = (rows, base, version) => {
    const path = File.path(base, version, 'csv');
    return [
        `const htmlTable = \"${View.Render.table(rows)}\";`,
        `const csvPath = \"${path}\";`
    ].join('');
};
exports.injection = injection;
const create = (rows, base, version) => View.create((0, exports.injection)(rows, base, version));
exports.create = create;
//# sourceMappingURL=HTML.js.map
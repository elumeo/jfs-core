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
exports.equal = exports.save = exports.remove = exports.restore = void 0;
const CSV = __importStar(require("./CSV"));
const HTML = __importStar(require("./HTML"));
const restore = (base) => __awaiter(void 0, void 0, void 0, function* () {
    return ({
        html: yield HTML.get(base),
        csv: yield CSV.get(base),
    });
});
exports.restore = restore;
const remove = (base) => __awaiter(void 0, void 0, void 0, function* () {
    yield HTML.remove(base);
    yield CSV.remove(base);
});
exports.remove = remove;
const save = (base, version, asset) => __awaiter(void 0, void 0, void 0, function* () {
    yield CSV.save(base, version, asset.csv);
    yield HTML.save(base, version, asset.html);
});
exports.save = save;
const equal = (first, second) => (first.csv === second.csv);
exports.equal = equal;
//# sourceMappingURL=Asset.js.map
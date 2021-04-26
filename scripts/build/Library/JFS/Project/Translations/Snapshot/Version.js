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
Object.defineProperty(exports, "__esModule", { value: true });
exports.next = exports.last = exports.create = exports.get = void 0;
const Text = __importStar(require("../../../../Text"));
const File = __importStar(require("./File"));
const CSV = __importStar(require("./CSV"));
const get = (text, suffix) => parseInt(Text.between(text, File.prefix + '.v', suffix));
exports.get = get;
const create = (counter, suffix) => [
    File.prefix,
    `v${counter}`,
    suffix
].join('.');
exports.create = create;
exports.last = CSV.version;
const next = (version) => (version === null
    ? 1
    : version + 1);
exports.next = next;
//# sourceMappingURL=Version.js.map
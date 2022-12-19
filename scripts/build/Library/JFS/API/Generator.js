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
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const ANSI = __importStar(require("ansi-colors"));
const Description = __importStar(require("./Description"));
const Code = __importStar(require("./Code"));
const Check = __importStar(require("./Check"));
const run = (path, options) => __awaiter(void 0, void 0, void 0, function* () {
    const description = yield Description.generate(path);
    const result = yield Check.run(path, description);
    if (result) {
        console.log([
            `API/JSC/Description.json did change.\n`,
            ANSI.bgRedBright(' --> Generating new API...')
        ].join(''));
        const code = Code.generate(description, {
            namespace: (options || {}).namespace || 'JSCApi',
            core: (options || {}).core || false
        });
        Description.save(path, description);
        Code.save(path, code);
    }
    else {
        console.log([
            `API/JSC/Description.json did not change.\n`,
            ANSI.bgGreenBright(' --> Nothing to be done here.')
        ].join(''));
    }
});
exports.run = run;
//# sourceMappingURL=Generator.js.map
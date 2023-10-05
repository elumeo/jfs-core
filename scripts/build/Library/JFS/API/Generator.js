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
const OpenAPI = __importStar(require("openapi-typescript-codegen"));
const run = (path, options) => __awaiter(void 0, void 0, void 0, function* () {
    // const description = await Description.generate(path);
    // const result = await Check.run(path, description);
    if (true) {
        console.log([
            `API/JSC/Description.json did change.`,
            ANSI.bgRedBright(' --> Generating new API...')
        ].join('\n'));
        // const module = Code.generate(description, {
        //   moduleName: (options || {}).namespace || 'JSCApi',
        //   context: (options || {}).core && 'core' || 'app'
        // });
        // console.log({ description })
        // await Description.save(path, description)
        yield OpenAPI.generate({
            input: "http://api.jsc-app.book/openapi/description?filter=services:ServiceProxy",
            //input: "./src/API/JSC/Description.json",
            output: './src/API/JSC/generated'
        });
        // await Code.cleanup(path)
        // await Code.save(path, [module])
    }
    else {
        console.log([
            `API/JSC/Description.json did not change.`,
            ANSI.bgGreenBright(' --> Nothing to be done here.')
        ].join('\n'));
    }
});
exports.run = run;
//# sourceMappingURL=Generator.js.map
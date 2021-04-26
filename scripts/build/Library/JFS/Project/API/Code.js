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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = exports.save = exports.format = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = require("path");
const Prettier = __importStar(require("prettier"));
const Adapter = __importStar(require("./Adapter"));
const Render = __importStar(require("./Render"));
const format = (code) => (Prettier.format(code, { parser: 'babel-ts' }));
exports.format = format;
const save = (path, code) => __awaiter(void 0, void 0, void 0, function* () {
    return (fs_extra_1.default.writeFile(path_1.resolve(path, 'src', 'API', 'JSC', 'index.ts'), exports.format(code)));
});
exports.save = save;
const generate = (description, options) => {
    const remote = Adapter.adapt(description);
    const webSocket = (remote.clients
        .map(({ name }) => name)
        .includes('WebSocketClient'));
    return Render.Text.lines(Render.JSC.Import.HTTP(options.core), webSocket
        ? Render.JSC.Import.WebSocket(options.core)
        : '', Render.JSC.namespace({ name: options.namespace, remote }), Render.EcmaScript.export(`default ${options.namespace}`));
};
exports.generate = generate;
//# sourceMappingURL=Code.js.map
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
exports.generate = exports.save = exports.cleanup = exports.format = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = require("path");
const Prettier = __importStar(require("prettier"));
const _1 = require(".");
const Render = __importStar(require("./Render"));
const format = (code) => (Prettier.format(code, { parser: 'babel-ts' }));
exports.format = format;
const cleanup = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const apiPath = (0, path_1.resolve)(path, 'src', 'API', 'JSC');
    yield fs_extra_1.default.rm((0, path_1.join)(apiPath, 'DTO'), { recursive: true }).catch(console.error);
    return fs_extra_1.default.rm((0, path_1.join)(apiPath, 'Client'), { recursive: true }).catch(console.error);
});
exports.cleanup = cleanup;
const save = (path, modules) => __awaiter(void 0, void 0, void 0, function* () {
    return modules.map(({ name, namespace, code, modules: subModules }) => __awaiter(void 0, void 0, void 0, function* () {
        const apiPath = (0, path_1.resolve)(path, 'src', 'API', 'JSC');
        const modulePath = namespace.split('.');
        const fileName = (0, path_1.join)(apiPath, ...modulePath, name + '.ts');
        console.log({ fileName, name, namespace, code, subModules });
        yield fs_extra_1.default.ensureFile(fileName);
        if (!!subModules.length) {
            yield (0, exports.save)(path, subModules);
            yield (0, exports.save)(path, [{
                    name: 'index',
                    namespace,
                    modules: [],
                    code: Render.Text.lines(...subModules.map(m => Render.EcmaScript.export(`* as ${m.name} from './${m.name}'`)))
                }]);
        }
        yield fs_extra_1.default.writeFile(fileName, (0, exports.format)(code));
    }));
});
exports.save = save;
const generate = (description, options) => {
    const remote = _1.Adapter.adapt(description);
    const dtoModules = remote.dtos
        .map(dto => Render.JSC.DTO.toModule(dto));
    const clientModules = remote.clients
        .map(client => Render.JSC.Client.toModule(client, options));
    return {
        name: options.moduleName,
        modules: [...dtoModules, ...clientModules],
        namespace: '',
        code: ''
    };
    // return Render.Text.lines(
    //   Render.JSC.Import.HTTP(options.core),
    //   importWebSocketDependencies ? Render.JSC.Import.WebSocket(options.core) : '',
    //   Render.JSC.namespace({ name: options.name, remote }),
    //   Render.EcmaScript.export(`default ${options.name}`)
    // );
};
exports.generate = generate;
//# sourceMappingURL=Code.js.map
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
exports.generate = exports.render = exports.format = exports.describe = exports.preprocess = exports.Namespace = exports.DTO = exports.Client = exports.Imports = void 0;
const axios_1 = __importDefault(require("axios"));
const Prettier = __importStar(require("prettier"));
const Render_1 = __importDefault(require("../Render"));
const Imports = __importStar(require("./Imports"));
const Namespace = __importStar(require("./Namespace"));
const Text = __importStar(require("../../../../../Text"));
const Preprocessor = __importStar(require("./Preprocessor"));
exports.Imports = __importStar(require("./Imports"));
exports.Client = __importStar(require("./Client"));
exports.DTO = __importStar(require("./DTO"));
exports.Namespace = __importStar(require("./Namespace"));
const preprocess = (api, description) => (Object.assign(Object.assign({}, description), { dtos: Preprocessor.mapDTOs(description.dtos, api), clients: Preprocessor.mapClients(description.clients, api) }));
exports.preprocess = preprocess;
const describe = (remote) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `${remote.host}${remote.path}`;
    const protocols = ['http', 'https'];
    try {
        return ((yield axios_1.default.post(protocols.some(protocol => Text.Prefix.match(url, protocol))
            ? url
            : `http://${url}`, remote.configuration)).data);
    }
    catch (error) {
        console.log(error);
    }
});
exports.describe = describe;
const format = (code) => (Prettier.format(code, { parser: 'babel-ts' }));
exports.format = format;
const render = api => Render_1.default.Text.lines(Imports.generate(api.local), Namespace.generate({ name: api.local.namespace, remote: api.remote }), Render_1.default.EcmaScript.export(`default ${api.local.namespace}`));
exports.render = render;
const generate = (description, options) => {
    const preprocessed = exports.preprocess(options, description);
    const { dtos, clients } = preprocessed;
    return exports.render({
        local: Object.assign(Object.assign({}, options), { webSocketClient: (clients
                .map(({ name }) => name)
                .includes('WebSocketClient')) }),
        remote: {
            dtos,
            clients
        }
    });
};
exports.generate = generate;
//# sourceMappingURL=index.js.map
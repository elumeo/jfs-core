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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const Prettier = __importStar(require("prettier"));
const Render_1 = __importDefault(require("../Render"));
const Imports_1 = __importDefault(require("./Imports"));
const Client_1 = __importDefault(require("./Client"));
const DTO_1 = __importDefault(require("./DTO"));
const Namespace_1 = __importDefault(require("./Namespace"));
const Text_1 = __importDefault(require("../../../../../Text"));
const Preprocessor_1 = __importDefault(require("./Preprocessor"));
class API {
}
API.Client = Client_1.default;
API.DTO = DTO_1.default;
API.Imports = Imports_1.default;
API.Namespace = Namespace_1.default;
API.preprocess = (api, description) => (Object.assign(Object.assign({}, description), { dtos: Preprocessor_1.default.mapDTOs(description.dtos, api), clients: Preprocessor_1.default.mapClients(description.clients, api) }));
API.describe = ({ remote, onDescription }) => {
    const url = `${remote.host}${remote.path}`;
    const protocols = ['http', 'https'];
    return (axios_1.default.post(protocols.some(protocol => Text_1.default.beginsWith(url, protocol))
        ? url
        : `http://${url}`, remote.configuration)
        .then(({ data: description }) => onDescription(description))
        .catch((error) => console.log(error)));
};
API.format = code => Prettier.format(code, { parser: 'babel-ts' });
API.render = api => Render_1.default.Text.lines(API.Imports.generate(api.local), API.Namespace.generate({ name: api.local.namespace, remote: api.remote }), Render_1.default.EcmaScript.export(`default ${api.local.namespace}`));
API.generate = ({ description, options, onComplete }) => {
    const preprocessed = API.preprocess(options, description);
    const { dtos, clients } = preprocessed;
    onComplete(API.render({
        local: Object.assign(Object.assign({}, options), { webSocketClient: (clients
                .map(({ name }) => name)
                .includes('WebSocketClient')) }),
        remote: {
            dtos,
            clients
        }
    }));
};
exports.default = API;
//# sourceMappingURL=index.js.map
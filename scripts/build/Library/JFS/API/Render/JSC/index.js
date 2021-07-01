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
exports.namespace = exports.Client = exports.DTO = exports.Import = void 0;
exports.Import = __importStar(require("./Import"));
exports.DTO = __importStar(require("./DTO"));
exports.Client = __importStar(require("./Client"));
const DTO = __importStar(require("./DTO"));
const TypeScript = __importStar(require("../TypeScript"));
const Text = __importStar(require("../Text"));
const EcmaScript = __importStar(require("../EcmaScript"));
const Client = __importStar(require("./Client"));
const namespace = ({ name, remote }) => TypeScript.namespace({
    name,
    what: Text.lines(EcmaScript.export(TypeScript.interface({
        name: 'IUrlParams',
        lines: [
            'filter?: string;',
            'options?: string;',
            'searchString?: string;'
        ]
    })), EcmaScript.export(TypeScript.interface({
        name: 'IJscClientConfig',
        lines: [
            'params?: IUrlParams;',
        ]
    })), EcmaScript.export(TypeScript.namespace({
        name: 'DTO',
        what: Text.lines(...(remote.dtos
            .map(DTO.namespace)
            .map(EcmaScript.export)))
    })), Text.lines(...remote.clients.map(client => EcmaScript.export(TypeScript.namespace({
        name: client.name,
        what: Text.lines(...client.methods
            .filter(({ protocol }) => protocol.name === 'HTTP')
            .map(Client.HTTP.request), ...client.methods
            .filter(({ protocol }) => protocol.name === 'WS')
            .map(Client.WebSocket.stream))
    })))))
});
exports.namespace = namespace;
//# sourceMappingURL=index.js.map
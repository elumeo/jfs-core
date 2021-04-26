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
const Render = __importStar(require(".."));
const DTO = __importStar(require("./DTO"));
const namespace = ({ name, remote }) => Render.TypeScript.namespace({
    name,
    what: Render.Text.lines(Render.EcmaScript.export(Render.TypeScript.interface({
        name: 'IUrlParams',
        lines: [
            'filter?: string;',
            'options?: string;',
            'searchString?: string;'
        ]
    })), Render.EcmaScript.export(Render.TypeScript.interface({
        name: 'IJscClientConfig',
        lines: [
            'params?: IUrlParams;',
        ]
    })), Render.EcmaScript.export(Render.TypeScript.namespace({
        name: 'DTO',
        what: Render.Text.lines(...remote.dtos.map(DTO.namespace))
    })), Render.Text.lines(...remote.clients.map(client => Render.EcmaScript.export(Render.TypeScript.namespace({
        name: name,
        what: Render.Text.lines(...client.methods
            .filter(({ protocol }) => protocol.name === 'HTTP')
            .map(Render.JSC.Client.HTTP.request), ...client.methods
            .filter(({ protocol }) => protocol.name === 'WS')
            .map(Render.JSC.Client.WebSocket.stream))
    })))))
});
exports.namespace = namespace;
//# sourceMappingURL=index.js.map
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = exports.Client = exports.DTO = void 0;
const Render_1 = __importDefault(require("../Render"));
const DTO = __importStar(require("./DTO"));
const Client = __importStar(require("./Client"));
exports.DTO = __importStar(require("./DTO"));
exports.Client = __importStar(require("./Client"));
const generate = ({ name, remote }) => Render_1.default.TypeScript.namespace({
    name,
    what: Render_1.default.Text.lines(Render_1.default.EcmaScript.export(Render_1.default.TypeScript.interface({
        name: 'IUrlParams',
        lines: [
            'filter?: string;',
            'options?: string;',
            'searchString?: string;'
        ]
    })), Render_1.default.EcmaScript.export(Render_1.default.TypeScript.interface({
        name: 'IJscClientConfig',
        lines: [
            'params?: IUrlParams;',
        ]
    })), Render_1.default.EcmaScript.export(Render_1.default.TypeScript.namespace({
        name: 'DTO',
        what: Render_1.default.Text.lines(...remote.dtos.map(description => DTO.group(description)).map(Render_1.default.EcmaScript.export))
    })), Render_1.default.Text.lines(...remote.clients.map(client => Render_1.default.EcmaScript.export(Client.namespace(client)))))
});
exports.generate = generate;
//# sourceMappingURL=Namespace.js.map
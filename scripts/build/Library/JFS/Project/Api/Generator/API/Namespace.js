"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Render_1 = __importDefault(require("../Render"));
const DTO_1 = __importDefault(require("./DTO"));
const Client_1 = __importDefault(require("./Client"));
class Namespace {
}
Namespace.DTO = DTO_1.default;
Namespace.Client = Client_1.default;
Namespace.generate = ({ name, remote }) => Render_1.default.TypeScript.namespace({
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
        what: Render_1.default.Text.lines(...remote.dtos.map(description => Namespace.DTO.group(description)).map(Render_1.default.EcmaScript.export))
    })), Render_1.default.Text.lines(...remote.clients.map(client => Render_1.default.EcmaScript.export(Namespace.Client.namespace(client)))))
});
exports.default = Namespace;
//# sourceMappingURL=Namespace.js.map
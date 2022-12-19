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
Object.defineProperty(exports, "__esModule", { value: true });
exports.namespaces = exports.methods = exports.resource = void 0;
const Text = __importStar(require("../../../Text"));
const DTO = __importStar(require("./DTO"));
const resource = (resource) => (Object.assign(Object.assign({}, resource), { type: Object.assign(Object.assign({}, resource.type), { name: (Text.Prefix.match(resource.type.name, 'DTO')
            ? DTO.type(resource.type.name)
            : resource.type.name), generics: (resource.type.generics
            .map(generic => (Text.Prefix.match(generic, 'DTO')
            ? DTO.type(generic)
            : generic))) }) }));
exports.resource = resource;
const methods = (methods) => (methods.map(method => (Object.assign(Object.assign({}, method), { resource: (0, exports.resource)(method.resource), parameters: method.parameters.map(parameter => (Object.assign(Object.assign({}, parameter), { type: (Text.Prefix.match(parameter.type, 'DTO')
            ? DTO.type(parameter.type)
            : parameter.type) }))) }))));
exports.methods = methods;
const namespaces = (clients) => (clients
    .map(client => (Object.assign(Object.assign({}, client), { methods: (0, exports.methods)(client.methods), name: client.name.replace('Controller', 'Client') }))));
exports.namespaces = namespaces;
//# sourceMappingURL=Client.js.map
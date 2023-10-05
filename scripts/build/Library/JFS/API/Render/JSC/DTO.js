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
exports.toModule = exports.type = exports.namespace = exports.interface = exports.property = exports.constant = void 0;
const Code = __importStar(require("../Code"));
const TypeScript = __importStar(require("../TypeScript"));
const Text = __importStar(require("../Text"));
const EcmaScript = __importStar(require("../EcmaScript"));
const constant = (constant) => Code.Declaration.constant({
    name: `I_${constant.name}`,
    value: `'${constant.value}'`
});
exports.constant = constant;
const property = (name, { type, generics = [], array }) => (`${type}${TypeScript.generics(...generics)}${array ? '[]' : ''}`);
exports.property = property;
const _interface = (description) => TypeScript.interface({
    name: ('I'
        + description.name.substring(description.name.lastIndexOf('\\') + 1)
        + TypeScript.generics(...description.generics)),
    lines: [
        ...(Object
            .keys(description.properties)
            .map(key => `${key}?: ${(0, exports.property)(key, description.properties[key])};`))
    ]
});
exports.interface = _interface;
const namespace = ({ name, constants = [], dtos, namespaces }) => (TypeScript.namespace({
    name,
    what: Text.lines(...[
        ...constants.map(exports.constant),
        ...dtos.map(_interface),
        ...namespaces.map(exports.namespace)
    ].map(EcmaScript.export))
}));
exports.namespace = namespace;
const _type = (description) => TypeScript.type({
    name: ('I'
        + description.name.substring(description.name.lastIndexOf('\\') + 1)
        + TypeScript.generics(...description.generics)),
    value: Code.Block.braces({
        lines: [
            ...Object
                .keys(description.properties)
                .map(key => `${key}?: ${(0, exports.property)(key, description.properties[key])};`)
        ],
        indentation: 4
    })
});
exports.type = _type;
const toModule = (description, parentNamespace = 'DTO') => {
    const isDTODescription = !!(description === null || description === void 0 ? void 0 : description.properties);
    if (isDTODescription) {
        const dto = description;
        return {
            name: dto.name,
            namespace: parentNamespace,
            modules: [],
            code: EcmaScript.export(_type(dto))
        };
    }
    else {
        const namespace = description;
        const namespaceFullName = [parentNamespace, namespace.name].join('.');
        return {
            name: namespace.name,
            namespace: namespaceFullName,
            modules: [
                ...namespace.dtos.map(dto => (0, exports.toModule)(dto, namespaceFullName)),
                ...namespace.namespaces.map(n => (0, exports.toModule)(n, namespaceFullName))
            ],
            code: Text.lines(...namespace.constants
                .map(exports.constant)
                .map(EcmaScript.export)),
        };
    }
};
exports.toModule = toModule;
//# sourceMappingURL=DTO.js.map
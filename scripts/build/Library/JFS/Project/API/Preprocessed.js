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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.preprocess = exports.mapClients = exports.mapMethods = exports.mapName = exports.mapGenerics = exports.mapParameters = exports.mapDTOs = exports.mapDTOGroup = exports.mapDTO = exports.mapProperties = exports.mapProperty = exports.mapType = void 0;
const Text = __importStar(require("../../../Text"));
const mapType = (type, options) => (Text.Prefix.match(type, 'DTO')
    ? `${options.namespace}.${type.split('.').reduce((text, sequence, index, array) => (text
        + (index ? '.' : '')
        + (index === array.length - 1 ? 'I' : '')
        + sequence), '')}`
    : type);
exports.mapType = mapType;
const mapProperty = (property, options) => (Object.assign(Object.assign({}, property), { type: exports.mapType(property.type, options) }));
exports.mapProperty = mapProperty;
const mapProperties = (properties, options) => (Object.keys(properties).reduce((mapped, key) => (Object.assign(Object.assign({}, mapped), { [key]: exports.mapProperty(properties[key], options) })), {}));
exports.mapProperties = mapProperties;
const mapDTO = (dto, options) => (Object.assign(Object.assign({}, dto), { properties: exports.mapProperties(dto.properties, options) }));
exports.mapDTO = mapDTO;
const mapDTOGroup = (group, options) => (Object.assign(Object.assign({}, group), { dtos: group.dtos.map(dto => exports.mapDTO(dto, options)), namespaces: group.namespaces.map(group => exports.mapDTOGroup(group, options)) }));
exports.mapDTOGroup = mapDTOGroup;
const mapDTOs = (groups, options) => groups.map(group => exports.mapDTOGroup(group, options));
exports.mapDTOs = mapDTOs;
const mapParameters = (parameters, options) => parameters.map(parameter => {
    if (Text.Prefix.match(parameter.type, 'DTO')) {
        return Object.assign(Object.assign({}, parameter), { type: exports.mapType(parameter.type, options) });
    }
    else {
        return parameter;
    }
});
exports.mapParameters = mapParameters;
const mapGenerics = (generics, options) => (generics.map(generic => [
    options.namespace,
    Text.Prefix.match(generic, 'DTO')
        ? generic.split('.').reduce((typeName, sequence, index, array) => (typeName.length
            ? ([
                typeName,
                index === array.length - 1
                    ? 'I' + sequence
                    : sequence
            ].join('.'))
            : sequence), '')
        : generic
].join('.')));
exports.mapGenerics = mapGenerics;
const mapName = (name, options) => (Text.Prefix.match(name, 'DTO')
    ? `${options.namespace}.${name.split('.').reduce((typeName, sequence, index, array) => (typeName.length
        ? ([
            typeName,
            index === array.length - 1
                ? 'I' + sequence
                : sequence
        ].join('.'))
        : sequence), '')}`
    : name);
exports.mapName = mapName;
const mapMethods = (methods, options) => methods.map((_a) => {
    var { resource } = _a, method = __rest(_a, ["resource"]);
    return (Object.assign(Object.assign({}, method), { resource: Object.assign(Object.assign({}, resource), { type: Object.assign(Object.assign({}, resource.type), { name: exports.mapName(resource.type.name, options), generics: exports.mapGenerics(resource.type.generics, options) }) }), parameters: exports.mapParameters(method.parameters, options) }));
});
exports.mapMethods = mapMethods;
const mapClients = (clients, options) => clients.map((_a) => {
    var { methods } = _a, client = __rest(_a, ["methods"]);
    return (Object.assign(Object.assign({ methods: exports.mapMethods(methods, options) }, client), { name: client.name.replace('Controller', 'Client') }));
});
exports.mapClients = mapClients;
const preprocess = (api, description) => (Object.assign(Object.assign({}, description), { dtos: exports.mapDTOs(description.dtos, api), clients: exports.mapClients(description.clients, api) }));
exports.preprocess = preprocess;
//# sourceMappingURL=Preprocessed.js.map
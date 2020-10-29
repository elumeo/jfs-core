"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("../../../../../Text"));
class Preprocessor {
}
Preprocessor.mapType = (type, options) => (Text_1.default.beginsWith(type, 'DTO')
    ? `${options.namespace}.${type.split('.').reduce((text, sequence, index, array) => (text
        + (index ? '.' : '')
        + (index === array.length - 1 ? 'I' : '')
        + sequence), '')}`
    : type);
Preprocessor.mapProperty = (property, options) => (Object.assign(Object.assign({}, property), { type: Preprocessor.mapType(property.type, options) }));
Preprocessor.mapProperties = (properties, options) => Object.keys(properties).reduce((mapped, key) => (Object.assign(Object.assign({}, mapped), { [key]: Preprocessor.mapProperty(properties[key], options) })), {});
Preprocessor.mapDTO = (dto, options) => (Object.assign(Object.assign({}, dto), { properties: Preprocessor.mapProperties(dto.properties, options) }));
Preprocessor.mapDTOGroup = (group, options) => (Object.assign(Object.assign({}, group), { dtos: group.dtos.map(dto => Preprocessor.mapDTO(dto, options)), namespaces: group.namespaces.map(group => Preprocessor.mapDTOGroup(group, options)) }));
Preprocessor.mapDTOs = (groups, options) => groups.map(group => Preprocessor.mapDTOGroup(group, options));
Preprocessor.mapParameters = (parameters, options) => parameters.map(parameter => {
    if (Text_1.default.beginsWith(parameter.type, 'DTO')) {
        return Object.assign(Object.assign({}, parameter), { type: Preprocessor.mapType(parameter.type, options) });
    }
    else {
        return parameter;
    }
});
Preprocessor.mapGenerics = (generics, options) => generics.map(generic => [
    options.namespace,
    Text_1.default.beginsWith(generic, 'DTO')
        ? generic.split('.').reduce((typeName, sequence, index, array) => (typeName.length
            ? ([
                typeName,
                index === array.length - 1
                    ? 'I' + sequence
                    : sequence
            ].join('.'))
            : sequence), '')
        : generic
].join('.'));
Preprocessor.mapName = (name, options) => (Text_1.default.beginsWith(name, 'DTO')
    ? `${options.namespace}.${name.split('.').reduce((typeName, sequence, index, array) => (typeName.length
        ? ([
            typeName,
            index === array.length - 1
                ? 'I' + sequence
                : sequence
        ].join('.'))
        : sequence), '')}`
    : name);
Preprocessor.mapMethods = (methods, options) => methods.map((_a) => {
    var { resource } = _a, method = __rest(_a, ["resource"]);
    return (Object.assign(Object.assign({}, method), { resource: Object.assign(Object.assign({}, resource), { type: Object.assign(Object.assign({}, resource.type), { name: Preprocessor.mapName(resource.type.name, options), generics: Preprocessor.mapGenerics(resource.type.generics, options) }) }), parameters: Preprocessor.mapParameters(method.parameters, options) }));
});
Preprocessor.mapClients = (clients, options) => clients.map((_a) => {
    var { methods } = _a, client = __rest(_a, ["methods"]);
    return (Object.assign(Object.assign({ methods: Preprocessor.mapMethods(methods, options) }, client), { name: client.name.replace('Controller', 'Client') }));
});
exports.default = Preprocessor;
//# sourceMappingURL=Preprocessor.js.map
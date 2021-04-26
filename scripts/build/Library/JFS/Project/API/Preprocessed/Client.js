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
exports.methods = exports.name = exports.generics = exports.parameters = exports.type = void 0;
const Text = __importStar(require("../../../../Text"));
const type = (type, options) => (Text.Prefix.match(type, 'DTO')
    ? `${options.namespace}.${type.split('.').reduce((text, sequence, index, array) => (text
        + (index ? '.' : '')
        + (index === array.length - 1 ? 'I' : '')
        + sequence), '')}`
    : type);
exports.type = type;
const parameters = (parameters, options) => parameters.map(parameter => {
    if (Text.Prefix.match(parameter.type, 'DTO')) {
        return Object.assign(Object.assign({}, parameter), { type: exports.type(parameter.type, options) });
    }
    else {
        return parameter;
    }
});
exports.parameters = parameters;
const generics = (generics, options) => (generics.map(generic => [
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
exports.generics = generics;
const name = (name, options) => (Text.Prefix.match(name, 'DTO')
    ? `${options.namespace}.${name.split('.').reduce((typeName, sequence, index, array) => (typeName.length
        ? ([
            typeName,
            index === array.length - 1
                ? 'I' + sequence
                : sequence
        ].join('.'))
        : sequence), '')}`
    : name);
exports.name = name;
const methods = (methods, options) => methods.map((_a) => {
    var { resource } = _a, method = __rest(_a, ["resource"]);
    return (Object.assign(Object.assign({}, method), { resource: Object.assign(Object.assign({}, resource), { type: Object.assign(Object.assign({}, resource.type), { name: exports.name(resource.type.name, options), generics: exports.generics(resource.type.generics, options) }) }), parameters: exports.parameters(method.parameters, options) }));
});
exports.methods = methods;
//# sourceMappingURL=Client.js.map
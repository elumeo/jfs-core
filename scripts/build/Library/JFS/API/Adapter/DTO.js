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
exports.namespaces = exports.properties = exports.type = void 0;
const Text = __importStar(require("../../../Text"));
const type = (type) => {
    if (Text.Prefix.match(type, 'DTO')) {
        const segments = type.split('.');
        const last = segments[segments.length - 1];
        return [
            ...segments.slice(0, segments.length - 1),
            `I${last}`
        ].join('.');
    }
    else {
        return type;
    }
};
exports.type = type;
const properties = (properties) => (Object
    .keys(properties)
    .reduce((normalized, key) => {
    const property = properties[key];
    return Object.assign(Object.assign({}, normalized), { [key]: Object.assign(Object.assign({}, property), { type: (Text.Prefix.match(property.type, 'DTO')
                ? exports.type(property.type)
                : property.type) }) });
}, {}));
exports.properties = properties;
const namespaces = (root) => (root.map(namespace => (Object.assign(Object.assign({}, namespace), { dtos: namespace.dtos.map(dto => (Object.assign(Object.assign({}, dto), { properties: exports.properties(dto.properties) }))), namespaces: exports.namespaces(namespace.namespaces) }))));
exports.namespaces = namespaces;
//# sourceMappingURL=DTO.js.map
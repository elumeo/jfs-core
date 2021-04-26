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
exports.dto = void 0;
const Text = __importStar(require("../../../../Text"));
const type = (type, options) => (Text.Prefix.match(type, 'DTO')
    ? `${options.namespace}.${type.split('.').reduce((text, sequence, index, array) => (text
        + (index ? '.' : '')
        + (index === array.length - 1 ? 'I' : '')
        + sequence), '')}`
    : type);
const property = (property, options) => (Object.assign(Object.assign({}, property), { type: type(property.type, options) }));
const properties = (properties, options) => (Object.keys(properties).reduce((mapped, key) => (Object.assign(Object.assign({}, mapped), { [key]: property(properties[key], options) })), {}));
const dto = (dto, options) => (Object.assign(Object.assign({}, dto), { properties: properties(dto.properties, options) }));
exports.dto = dto;
//# sourceMappingURL=DTO.js.map
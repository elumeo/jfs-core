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
exports.generate = exports.property = void 0;
const Render = __importStar(require("../../../../../JFS/Project/API/Render"));
const property = ({ name, type, array, generics }) => (`${name}?: ${type}${generics && generics.length
    ? `<${generics.join(', ')}>`
    : ''}${array ? '[]' : ''};`);
exports.property = property;
const generate = ({ name, generics, properties }) => Render.TypeScript.interface({
    name: 'I' + name.substring(name.lastIndexOf('\\') + 1) + Render.TypeScript.generics(...generics),
    lines: [
        ...Object.keys(properties).map(key => exports.property(Object.assign(Object.assign({}, properties[key]), { name: key })))
    ]
});
exports.generate = generate;
//# sourceMappingURL=Description.js.map
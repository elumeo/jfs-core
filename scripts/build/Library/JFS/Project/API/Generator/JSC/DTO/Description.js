"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = exports.property = void 0;
const Render_1 = __importDefault(require("../../../../../../JFS/Project/Api/Generator/Render"));
const property = ({ name, type, array, generics }) => (`${name}?: ${type}${generics && generics.length
    ? `<${generics.join(', ')}>`
    : ''}${array ? '[]' : ''};`);
exports.property = property;
const generate = ({ name, generics, properties }) => Render_1.default.TypeScript.interface({
    name: `I${name.substring(name.lastIndexOf('\\') + 1)}`,
    generics,
    lines: [
        ...Object.keys(properties).map(key => exports.property(Object.assign(Object.assign({}, properties[key]), { name: key })))
    ]
});
exports.generate = generate;
//# sourceMappingURL=Description.js.map
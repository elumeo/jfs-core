"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Render_1 = __importDefault(require("../../../../../../JFS/Project/Api/Generator/Render"));
class Description {
}
Description.property = ({ name, type, array, generics }) => (`${name}?: ${type}${generics && generics.length
    ? `<${generics.join(', ')}>`
    : ''}${array ? '[]' : ''};`);
Description.generate = ({ name, generics, properties }) => Render_1.default.TypeScript.interface({
    name: `I${name.substring(name.lastIndexOf('\\') + 1)}`,
    generics,
    lines: [
        ...Object.keys(properties).map(key => Description.property(Object.assign(Object.assign({}, properties[key]), { name: key })))
    ]
});
exports.default = Description;
//# sourceMappingURL=Description.js.map
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
exports.function = exports.interface = exports.type = exports.namespace = exports.generics = exports.annotation = void 0;
const Code = __importStar(require("./Code"));
const annotation = ({ type, optional, array }) => {
    if (type) {
        return `${optional ? '?' : ''}: ${type}${array ? '[]' : ''}`;
    }
    else {
        return '';
    }
};
exports.annotation = annotation;
const generics = (...generics) => (generics.length
    ? `<${generics.join(', ')}>`
    : '');
exports.generics = generics;
const namespace = (namespace) => (`namespace ${namespace.name} ${Code.Block.braces({
    lines: [namespace.what],
    indentation: 2
})}`);
exports.namespace = namespace;
const type = (type) => `type ${Code.Expression.assignment(type)}`;
exports.type = type;
const _interface = (_interface) => (`interface ${_interface.name} ${Code.Block.braces({
    lines: _interface.lines,
    indentation: 2
})}`);
exports.interface = _interface;
const _function = (_function) => {
    const addGenerics = (rendered, arrow) => (arrow === false
        ? rendered.replace('function', 'function' + (0, exports.generics)(...(_function.generics || [])))
        : (0, exports.generics)(...(_function.generics || [])) + rendered);
    const addAnnotation = (rendered) => (rendered.replace(')', ')' + (0, exports.annotation)({ type: _function.return.type })));
    return [addAnnotation, addGenerics].reduce((rendered, mapper) => mapper(rendered, _function.arrow), Code.Expression.function({
        parameters: _function.parameters,
        arrow: _function.arrow,
        body: _function.body
    }));
};
exports.function = _function;
//# sourceMappingURL=TypeScript.js.map
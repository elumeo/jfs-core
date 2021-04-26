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
exports.function = exports.interface = exports.type = exports.assignment = exports.namespace = exports.generics = exports.annotation = void 0;
const Code = __importStar(require("../Code"));
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
const assignment = (assignment) => Code.Expression.assignment({
    name: [
        name,
        exports.generics(...assignment.generics),
        assignment.annotation ? exports.annotation(assignment.annotation) : ''
    ].join(''),
    value: assignment.value
});
exports.assignment = assignment;
const type = (type) => `type ${exports.assignment(type)}`;
exports.type = type;
const _interface = (_interface) => (`interface ${_interface.name[0].toUpperCase() + _interface.name.substring(1)}${exports.generics(...(_interface.generics || []))} ${Code.Block.braces({ lines: _interface.lines, indentation: 2 })}`);
exports.interface = _interface;
const _function = (_function) => {
    const addGenerics = (rendered, arrow) => (arrow === false
        ? rendered.replace('function', 'function' + exports.generics(...(_function.generics || [])))
        : exports.generics(...(_function.generics || [])) + rendered);
    const addAnnotation = (rendered) => (rendered.replace(')', ')' + exports.annotation({ type: _function.returnAnnotation.type })));
    return [
        addAnnotation,
        addGenerics
    ].reduce((rendered, mapper) => mapper(rendered, _function.arrow), Code.Expression.function({
        parameters: _function.parameters,
        arrow: _function.arrow,
        body: _function.body
    }));
};
exports.function = _function;
//# sourceMappingURL=index.js.map
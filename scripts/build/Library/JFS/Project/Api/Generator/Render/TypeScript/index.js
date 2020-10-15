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
const JavaScript_1 = __importDefault(require("../JavaScript"));
class TypeScript {
}
TypeScript.annotation = ({ type, optional, array }) => {
    if (type) {
        return `${optional ? '?' : ''}: ${type}${array ? '[]' : ''}`;
    }
    else {
        return '';
    }
};
TypeScript.generics = (...generics) => (generics.length
    ? `<${generics.join(', ')}>`
    : '');
TypeScript.namespace = ({ name, what }) => (`namespace ${name} ${JavaScript_1.default.braces({
    lines: [
        what
    ],
    indentation: 2
})}`);
TypeScript.assignment = ({ name, value, generics, annotation }) => JavaScript_1.default.assignment({
    name: [
        name,
        TypeScript.generics(...generics),
        annotation ? TypeScript.annotation(annotation) : ''
    ].join(''),
    value
});
TypeScript.type = ({ name, generics, value }) => `type ${TypeScript.assignment({ name, generics, value })}`;
TypeScript.interface = ({ name, generics, lines }) => `interface ${name[0].toUpperCase() + name.substring(1)}${TypeScript.generics(...(generics || []))} ${JavaScript_1.default.braces({ lines, indentation: 2 })}`;
TypeScript.variable = ({ constant, value, name, annotation }) => (JavaScript_1.default.variable({
    constant,
    value,
    name: name + TypeScript.annotation(annotation || {})
}));
TypeScript.parameter = (_a) => {
    var { name, defaultValue } = _a, annotation = __rest(_a, ["name", "defaultValue"]);
    return JavaScript_1.default.parameter({
        name: `${name}${TypeScript.annotation(annotation)}`,
        defaultValue
    });
};
TypeScript.parameters = (parameters) => JavaScript_1.default.parameters(parameters, TypeScript.parameter);
TypeScript.function = ({ parameters, body, fatArrow, generics, returnAnnotation }) => {
    const addGenerics = (rendered, fatArrow) => (fatArrow === false
        ? rendered.replace('function', 'function' + TypeScript.generics(...(generics || [])))
        : TypeScript.generics(...(generics || [])) + rendered);
    const addAnnotation = (rendered) => (rendered.replace(')', ')' + TypeScript.annotation({ type: returnAnnotation.type })));
    return [
        addAnnotation,
        addGenerics
    ].reduce((rendered, mapper) => mapper(rendered, fatArrow), JavaScript_1.default.function({
        parameters,
        fatArrow,
        body,
        mapParameters: TypeScript.parameters
    }));
};
exports.default = TypeScript;
//# sourceMappingURL=index.js.map
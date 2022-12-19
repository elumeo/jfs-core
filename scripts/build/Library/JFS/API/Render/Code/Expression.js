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
exports.function = exports.object = exports.assignment = exports.or = exports.and = exports.equal = void 0;
const Block = __importStar(require("./Block"));
const equal = (first, second) => `${first} === ${second}`;
exports.equal = equal;
const and = (first, second) => `${first} && ${second}`;
exports.and = and;
const or = (first, second) => `${first} || ${second}`;
exports.or = or;
const assignment = (assignment) => (`${assignment.name} = ${assignment.value}`);
exports.assignment = assignment;
const object = ({ properties }) => (`{ ${properties.map(({ name, value }) => `${name}: ${value}`).join(',\n')} }`);
exports.object = object;
const _function = (_function) => {
    const lines = (Array.isArray(_function.body)
        ? _function.body
        : [_function.body]);
    if (_function.arrow === true || _function.arrow === undefined) {
        return (`(${_function.parameters.join(', ')}) => ${Block.braces({ lines, indentation: 2 })}`);
    }
    else if (_function.arrow && typeof _function.body === 'string') {
        return `(${_function.parameters.join(', ')}) => ${_function.body}`;
    }
    else if (_function.arrow === false) {
        return (`function(${_function.parameters.join(', ')}) ${Block.braces({ lines, indentation: 2 })}`);
    }
};
exports.function = _function;
//# sourceMappingURL=Expression.js.map
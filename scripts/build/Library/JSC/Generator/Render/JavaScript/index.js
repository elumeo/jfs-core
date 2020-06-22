"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("../Text"));
class JavaScript {
}
JavaScript.indentation = (size = 0) => Array(size).fill(' ').join('');
JavaScript.braces = ({ lines, indentation }) => Text_1.default.lines(`{`, [
    JavaScript.indentation(indentation),
    Text_1.default.lines(...lines)
].join(''), `}`);
JavaScript.variable = ({ constant, value, name }) => (`${constant === false
    ? 'let'
    : 'const'} ${value
    ? JavaScript.assignment({ name, value })
    : name};`);
JavaScript.equal = (first, second) => (`${first} === ${second}`);
JavaScript.and = (first, second) => (`${first} && ${second}`);
JavaScript.or = (first, second) => `${first} || ${second}`;
JavaScript.condition = ({ condition, match, mismatch }) => (`if (${condition}) ${JavaScript.braces({
    indentation: 2,
    lines: match
})}
    ${mismatch && mismatch.length
    ? `else ${JavaScript.braces({
        indentation: 2,
        lines: mismatch
    })}`
    : ''}`);
JavaScript.return = what => `return ${what || ''};`;
JavaScript.object = ({ properties }) => (`{ ${properties.map(({ name, value }) => `${name}: ${value}`).join(',\n')} }`);
JavaScript.assignment = ({ name, value }) => `${name} = ${value}`;
JavaScript.parameter = ({ name, defaultValue }) => (defaultValue
    ? JavaScript.assignment({
        name,
        value: defaultValue
    })
    : name);
JavaScript.parameters = (parameters, mapParameter = JavaScript.parameter) => parameters.map(mapParameter).join(', ');
JavaScript.function = ({ parameters, fatArrow, body, mapParameters }) => {
    const mappedValue = (Array.isArray(body)
        ? null
        : body);
    const lines = (Array.isArray(body)
        ? body
        : [body]);
    const parameterMapper = mapParameters || JavaScript.parameters;
    if (fatArrow === false) {
        return (`function(${parameterMapper(parameters)}) ${JavaScript.braces({ lines, indentation: 2 })}`);
    }
    else if (fatArrow === true || fatArrow === undefined) {
        return (`(${parameterMapper(parameters)}) => ${JavaScript.braces({ lines, indentation: 2 })}`);
    }
    else if (fatArrow && fatArrow.shortSyntax) {
        return `(${parameterMapper(parameters)}) => ${mappedValue}`;
    }
};
exports.default = JavaScript;
//# sourceMappingURL=index.js.map
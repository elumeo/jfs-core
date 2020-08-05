"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CLI {
    static parse() {
        return process.argv
            .slice(2)
            .map(CLI.detectInput)
            .reduce(CLI.mergeInput, []);
    }
    static parameters() {
        return (CLI.parse()
            .reduce((result, parameter) => {
            const parameters = Object.assign({}, result);
            parameters[parameter.label] = (parameter.value.length > 1
                ? parameter.value
                : parameter.value[0]);
            return parameters;
        }, {}));
    }
    static parameter(name) {
        return CLI.parameters()[name];
    }
}
exports.default = CLI;
CLI.detectInput = (word) => {
    const isLongNameLabel = word.substring(0, 2) === '--';
    const isShortcutLabel = word.substring(0, 1) === '-';
    const isLabel = isLongNameLabel || isShortcutLabel;
    return {
        text: (isLongNameLabel
            ? word.substring(2, word.length)
            : isShortcutLabel
                ? word.substring(1, word.length)
                : word),
        type: isLabel ? 'label' : 'value'
    };
};
CLI.mergeInput = (result, input) => {
    if (input.type === 'label') {
        result.push({ label: input.text, value: [] });
    }
    else {
        if (!result.length) {
            throw `CLI input must be labeled with '-' or '--'`;
        }
        result[result.length - 1].value.push(input.text);
    }
    return result;
};
//# sourceMappingURL=index.js.map
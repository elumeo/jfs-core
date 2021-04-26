"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tag = exports.attribute = void 0;
const attribute = ({ name, value }) => `${name}${value
    ? `="${value}"`
    : ''}`;
exports.attribute = attribute;
const tag = (props) => {
    const { name, shortSyntax, children } = props;
    const attributes = props.attributes.map(exports.attribute).join(' ');
    if (shortSyntax) {
        return `<${props.name} ${attributes}/>`;
    }
    else {
        return [
            `<${name} ${attributes}>`,
            ...children.map(exports.tag),
            `</${name}>`
        ].join('\n');
    }
};
exports.tag = tag;
//# sourceMappingURL=HTML.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HTML {
}
HTML.attribute = ({ name, value }) => `${name}${value
    ? `="${value}"`
    : ''}`;
HTML.tag = (props) => {
    const { name, shortSyntax, children } = props;
    const attributes = props.attributes.map(HTML.attribute).join(' ');
    if (shortSyntax) {
        return `<${props.name} ${attributes}/>`;
    }
    else {
        return [
            `<${name} ${attributes}>`,
            ...children.map(HTML.tag),
            `</${name}>`
        ].join('\n');
    }
};
exports.default = HTML;
//# sourceMappingURL=index.js.map
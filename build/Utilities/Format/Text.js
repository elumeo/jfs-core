class Text {
}
Text.capitalize = (value) => (`${value[0].toUpperCase()}${value.slice(1)}`);
Text.beginsWith = (text, ...prefixes) => (prefixes.some(prefix => text.substring(0, prefix.length) === prefix));
Text.endsWith = (text, ...suffixes) => (suffixes.some(suffix => text.substring(text.length - suffix.length) === suffix));
export default Text;
//# sourceMappingURL=Text.js.map
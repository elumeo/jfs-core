import { remove } from 'diacritics';
class Text {
}
Text.capitalize = (value) => (`${value[0].toUpperCase()}${value.slice(1)}`);
Text.beginsWith = (text, ...prefixes) => (prefixes.some(prefix => text.substring(0, prefix.length) === prefix));
Text.endsWith = (text, ...suffixes) => (suffixes.some(suffix => text.substring(text.length - suffix.length) === suffix));
Text.removeDiacritics = (text) => remove(Array.from(text
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .normalize('NFD')).filter((character) => (character.charCodeAt(0) >= 65 && character.charCodeAt(0) <= 90 ||
    character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 122)).join(''));
export default Text;
//# sourceMappingURL=Text.js.map
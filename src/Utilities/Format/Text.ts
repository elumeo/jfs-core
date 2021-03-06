import { remove } from 'diacritics';

class Text {
  static capitalize = (value: string) => (
    `${value[0].toUpperCase()}${value.slice(1)}`
  );

  static beginsWith = (text: string, ...prefixes: string[] ): boolean => (
    prefixes.some(prefix => text.substring(0, prefix.length) === prefix)
  )

  static endsWith = (text: string, ...suffixes: string[]) => (
    suffixes.some(suffix => text.substring(text.length -suffix.length) === suffix)
  )

  static removeDiacritics = (text: string): string => remove(
    Array.from(
      text
        .toLowerCase()
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .normalize('NFD')
    ).filter(
      (character: string) => (
        character.charCodeAt(0) >= 65 && character.charCodeAt(0) <= 90 ||
        character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 122
      )
    ).join('')
  )
}

export default Text;

namespace Text {
  export const beginsWith = (text, pattern) => (
    text.substring(0, pattern.length) === pattern
  );

  export const endsWith = (text: string, pattern: string) => (
    text.substring(text.length -pattern.length, text.length) === pattern
  );
  export const capitalize = text => text[0].toUpperCase() + text.substring(1);

  export const removePrefix = (
    text: string,
    prefix: string
  ): string => text.substring(
    prefix.length,
    text.length
  );

  export const removeSuffix = (
    text: string,
    suffix: string
  ): string => (
    Text.endsWith(text, suffix)
      ? text.substring(
        0,
        text.length -suffix.length
      )
      : text
  );
}

export default Text;

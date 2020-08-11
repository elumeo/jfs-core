namespace Text {
  export const beginsWith = (text: string, pattern: string) => (
    text.substring(0, pattern.length) === pattern
  );

  export const endsWith = (text: string, pattern: string) => (
    text.substring(text.length -pattern.length, text.length) === pattern
  );
  export const capitalize = text => text[0].toUpperCase() + text.substring(1);

  export const removePrefix = (
    text: string,
    prefix: string
  ): string => {
    if (text.substring(0, prefix.length) === prefix) {
      return text.substring(
        prefix.length,
        text.length
      )
    }
    else {
      return text;
    }
  };

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

  export const between = (
    text: string,
    prefix: string,
    suffix: string
  ): string => {
    return text.substring(
      prefix.length,
      prefix.length + (
        text.length - (
          prefix.length
          + suffix.length
        )
      )
    )
  }
}

export default Text;

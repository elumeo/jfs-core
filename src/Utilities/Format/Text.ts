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
}

export default Text;

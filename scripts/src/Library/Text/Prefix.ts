export const match = (text: string, pattern: string) => (
  text.substring(0, pattern.length) === pattern
);

export const remove = (text: string, prefix: string): string => (
  match(text, prefix)
    ? text.substring(prefix.length, text.length)
    : text
);
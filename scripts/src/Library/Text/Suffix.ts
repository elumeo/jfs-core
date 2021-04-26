export const match = (text: string, pattern: string) => (
  text.substring(text.length -pattern.length, text.length) === pattern
);

export const remove = (text: string, suffix: string): string => (
  match(text, suffix)
    ? text.substring(0, text.length -suffix.length)
    : text
);
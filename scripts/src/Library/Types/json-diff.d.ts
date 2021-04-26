declare module 'json-diff' {
  export function diffString<T1, T2>(first: T1, second: T2): string;
}
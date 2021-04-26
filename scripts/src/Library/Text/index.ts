export * as Prefix from './Prefix';
export * as Suffix from './Suffix';

import * as Prefix from './Prefix';
import * as Suffix from './Suffix';

export const between = (text: string, prefix: string, suffix: string): string => (
  Suffix.remove(
    Prefix.remove(text, prefix),
    suffix
  )
)

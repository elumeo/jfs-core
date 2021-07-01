import { resolve } from 'path';
import * as Version from './Version';

export const prefix = 'missing.translations';

export const path = (base: string, version: number, suffix: string) => resolve(
  base,
  Version.create(
    version,
    suffix
  )
);
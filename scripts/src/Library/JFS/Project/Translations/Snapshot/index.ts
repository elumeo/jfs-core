export * as File from './File';
export * as Version from './Version';
export * as HTML from './HTML';
export * as CSV from './CSV';
export * as Asset from './Asset';
export * as View from './View';

import * as Asset from './Asset';
import * as Version from './Version';

export const last = async (base: string) => ({
  version: await Version.last(base),
  asset: await Asset.restore(base)
});
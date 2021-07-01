import * as Text from 'Library/Text';
import * as File from './File';
import * as CSV from './CSV';

export const get = (text: string, suffix: string) => parseInt(
  Text.between(text, File.prefix + '.v', suffix)
);

export const create = (counter: number, suffix: string) => [
  File.prefix,
  `v${counter}`,
  suffix
].join('.');

export const last = CSV.version;

export const next = (version: number) => (
  version === null
    ? 1
    : version +1
)
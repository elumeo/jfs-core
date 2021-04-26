import * as CSV from './CSV';
import * as HTML from './HTML';
import * as Type from './Type';

export const restore = async (base: string) => ({
  html: await HTML.get(base),
  csv: await CSV.get(base),
});

export const remove = async (base: string) => {
  await HTML.remove(base);
  await CSV.remove(base);
};

export const save = async (
  base: string,
  version: number,
  asset: Type.Asset
) => {
  await CSV.save(base, version, asset.csv);
  await HTML.save(base, version, asset.html);
};

export const equal = (first: Type.Asset, second: Type.Asset) => (
  first.csv === second.csv
);
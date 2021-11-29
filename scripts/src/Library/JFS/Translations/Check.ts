import * as Snapshot from './Snapshot';
import * as Table from './Table';
import * as File from './File';
import open from 'open';
import * as Locale from './Locale';
import { dirname } from 'path';

export const run = async (path: string) => {

  const locales = await Locale.all(path);

  const translations = locales.reduce(
    (translations, locale) => ({
      ...translations,
      [locale.name]: locale.messages,
    }),
    {}
  );

  const missing = Table.missing(translations);

  const last = await Snapshot.last(dirname(path));
  const version = Snapshot.Version.next(last.version);
  const asset = await File.asset(
    Table.get(translations, 'missing'),
    path,
    version
  );

  const first = last.version === null;
  const changed = !first && !Snapshot.Asset.equal(asset, last.asset);

  const outdated = (
    !first && !missing.length ||
    changed
  );

  if (outdated) {
    await Snapshot.Asset.remove(dirname(path));
  }

  if (missing.length && (first || changed)) {
    await Snapshot.Asset.save(dirname(path), version, asset);
    const html = Snapshot.File.path(dirname(path), version, 'html');
    open(html);
  }
  else if (missing.length) {
    const html = Snapshot.File.path(dirname(path), last.version, 'html');
    open(html);
  }

  return !Boolean(missing.length);
}
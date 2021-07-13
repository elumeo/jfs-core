import * as Snapshot from './Snapshot';
import * as Table from './Table';
import { dirname } from 'path';
import * as File from './File';
import open from 'open';

export const run = async (path: string) => {
  const base = dirname(path);
  const translations = await File.json(base);
  const missing = Table.missing(translations);

  const last = await Snapshot.last(base);
  const version = Snapshot.Version.next(last.version);
  const asset = await File.asset(
    Table.get(translations, 'missing'),
    base,
    version
  );

  const first = last.version === null;
  const changed = !first && !Snapshot.Asset.equal(asset, last.asset);

  const outdated = (
    !first && !missing.length ||
    changed
  );

  if (outdated) {
    await Snapshot.Asset.remove(base);
  }

  if (missing.length && (first || changed)) {
    await Snapshot.Asset.save(base, version, asset);
    const html = Snapshot.File.path(base, version, 'html');
    open(html);
  }
  else if (missing.length) {
    const html = Snapshot.File.path(base, last.version, 'html');
    open(html);
  }

  return !Boolean(missing.length);
}
import * as Package from 'Library/NPM/Package';
import * as Text from 'Library/Text';
import { resolve, dirname } from 'path';
import * as Type from 'Type';

export const which = async (path: string): Promise<Type.Environment.Info['which']> => {
  const { name } = (await Package.json(resolve(path, 'package.json')));

  if (name === '@elumeo/jfs-core') {
    return 'core';
  }
  else if (name === '@elumeo/jfs-scripts') {
    return 'scripts';
  }
  else if (Text.Prefix.match(name, 'jfc')) {
    return 'component';
  }
  else if (Text.Prefix.match(name, 'jfs')) {
    return 'app';
  }
  else {
    return null;
  }
};

export const core = async (path: string) => {
  switch (await which(path)) {
    case 'core': return path;
    case 'scripts': return dirname(path);
    case 'app':
    case 'component': return resolve(path, 'node_modules', '@elumeo', 'jfs-core');
    default: return null;
  }
}

export const components = async (path: string) => {
  if ((await which(path)) === 'app') {
    return (
      Object
        .keys((await Package.json(resolve(path, 'package.json'))).dependencies)
        .filter(name => Text.Prefix.match(name, 'jfc-'))
        .map(jfc => Package.node_module(path, jfc))
    );
  }
  else {
    return []
  }
}

export const detect = async (path: string): Promise<Type.Environment.Info> => ({
  root: path,
  which: await which(path),
  core: await core(path),
  components: await components(path),
});
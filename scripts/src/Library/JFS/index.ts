import * as Package from 'Library/NPM/Package';
import * as Text from 'Library/Text';
import { resolve } from 'path';
import fs from 'fs-extra';

type Project = 'core' | 'component' | 'app';

export const type = async (path: string): Promise<Project> => {
  const { name } = (await Package.json(resolve(path, 'package.json')));

  if (name === '@elumeo/jfs-core') {
    return 'core';
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
  switch (await type(path)) {
    case 'core': return path;
    case 'app':
    case 'component': return resolve(path, 'node_modules', '@elumeo', 'jfs-core');
    default: return null;
  }
}

export const components = async (path: string) => (
  Object
    .keys((await Package.json(resolve(path, 'package.json'))).dependencies)
    .filter(name => Text.Prefix.match(name, 'jfc-'))
    .map(jfc => Package.node_module(path, jfc))
);

export const discover = async (path: string) => ({
  type: await type(path),
  core: await core(path),
  components: await components(path),
});

export const config = async (path: string) => (
  (await fs.readJSON(resolve(path, 'config.dist.json'))) as {
    [key: string]: any;
  }
);
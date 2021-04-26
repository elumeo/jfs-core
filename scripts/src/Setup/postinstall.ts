import * as JFS from 'Library/JFS';
import Script from 'Library/JFS/Core/Script';
import * as Project from 'Library/JFS/Project';
import * as Package from 'Library/NPM/Package';

import { resolve, sep, dirname } from 'path';
import fs from 'fs-extra';

const parent = (path: string): string => {
  if (fs.existsSync(resolve(path, 'package.json'))) {
    return path;
  }
  else if (path.split(sep).length > 1) {
    return parent(dirname(path));
  }
  else {
    return null;
  }
}

export default new Script({
  path: __filename,
  name: 'jfs-postinstall',
  scope: ['all'],
  run: async () => {
    const { core } = await JFS.discover(process.cwd())

    await Project.Package.addRegisterScripts(process.cwd(), core);
    await Project.Package.registerScripts(process.cwd());
    await Project.Package.deployConfigFiles(process.cwd());
    await Project.Package.setPeerDependencies(process.cwd());
    
    const path = parent(process.cwd());

    if (parent) {
      Project.Package.addPostinstallScript(path, core);
      Package.run('jfs-postinstall', {
        cwd: path,
        stdio: 'inherit'
      });
    }
  }
});

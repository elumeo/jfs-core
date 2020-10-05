import Directory from 'Library/OS/Filesystem/Directory';
import NodePackage from 'Library/Node/Package';
import Config from 'Library/JFS/Config';
import Text from 'Library/Text';
import Translations from './Translations';
import JSC from './Api';
import File from 'Library/OS/Filesystem/File';
import { resolve, sep, relative, dirname } from 'path';
import Build from './Build';
import Process from 'Library/OS/Process';
import JFS from '..';
import Core from '../Core';

namespace Project {
  export type Props = {
    path: string;
  }
}

abstract class Project {
  public readonly path: string;
  protected readonly name: string;
  public readonly directory: Directory;
  public readonly nodePackage: NodePackage;
  public readonly JSC: JSC;
  public readonly config: Config;
  public readonly tsconfig: File;

  constructor({path}: Project.Props) {
    this.path = path;
    this.directory = new Directory({path});
    this.name = this.directory.name;
    if (this.directory.name.substring('jfc-'.length) !== '') {
      this.name = this.directory.name
        .substring('jfc-'.length)
        .split('-')
        .map(Text.capitalize)
        .join('');
    }
    this.nodePackage = new NodePackage(NodePackage.location(path));
    this.JSC = new JSC(JSC.location(path));
    this.config = new Config(Config.location(path));
    this.tsconfig = new File({
      path: resolve(path, 'tsconfig.json')
    });
  }

  public translations = (
    onComplete: (translations: Translations) => void
  ) => Translations.get(
    this.path,
    translations => onComplete(new Translations(translations))
  )

  public build = (watch?: boolean) => {
    console.log(`Running build in ${watch ? 'watch' : 'single'} mode`);
    if (watch) {
      Build.watch(this.directory);
    }
    else {
      Build.single(this.directory);
    }
  }

  public setPeerDependencies = () => new Promise(resolve => {
    const child = new Process({
      command: process.platform === 'win32' ? 'npm.cmd' : 'npm',
      parameters: ['run', 'set-peer-dependencies'],
      options: {
        cwd: this.path,
        stdio: 'inherit'
      }
    });
    child.run(instance => instance.on('exit', resolve));
  });

  public deployConfigFiles = () => new Promise(resolve => {
    const child = new Process({
      command: process.platform === 'win32' ? 'npm.cmd' : 'npm',
      parameters: ['run', 'deploy-config-files'],
      options: {
        cwd: this.path,
        stdio: 'inherit'
      }
    });
    child.run(instance => instance.on('exit', resolve));
  });

  public scriptPath = (core: Core, name: string) => resolve(
    relative(this.path, core.path),
    'scripts', 'build', 'Setup', name
  ).replace(sep, '/');

  public addPostinstallScript = (core: Core) => new Promise(resolve => {
    this.nodePackage.json(data => {
      if (!data.scripts['jfs-postinstall']) {
        this.nodePackage.file.save(
          {
            ...data,
            scripts: {
              ...data.scripts,
              'jfs-postinstall': `node ${this.scriptPath(core, 'postinstall')}`
            }
          },
          resolve
        );
      }
      else {
        resolve();
      }
    })
  });

  public addRegisterScripts = (core: Core) => new Promise(resolve => {
    this.nodePackage.json(data => {
      if (!data.scripts['register-scripts']) {
        this.nodePackage.file.save(
          {
            ...data,
            scripts: {
              ...data.scripts,
              'register-scripts': `node ${this.scriptPath(core, 'register-scripts')}`
            }
          },
          resolve
        );
      }
      else {
        resolve();
      }
    })
  });

  public registerScripts = () => new Promise(resolve => {
    const child = new Process({
      command: process.platform === 'win32' ? 'npm.cmd' : 'npm',
      parameters: ['run', 'register-scripts'],
      options: {
        cwd: this.path,
        stdio: 'inherit'
      }
    });
    child.run(instance => instance.on('exit', resolve));
  });

  public parent = () => new Promise<Project>(async resolvePromise => {
    const parent = path => new NodePackage(NodePackage.location(dirname(path)));
    let path = this.path;
    for (let i = 0; i < this.path.split(sep).length; i++) {
      const nodePackage = parent(path);
      if (nodePackage.file.exists()) {
        JFS.project(nodePackage, resolvePromise);
        return;
      }
      path = dirname(path);
    }
    resolvePromise(null);
  })
}

export default Project;

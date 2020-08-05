import Directory from 'Library/OS/Filesystem/Directory';
import NodePackage from 'Library/Node/Package';
import Config from 'Library/JFS/Config';
import Text from 'Library/Text';
import Translations from './Translations';
import JSC from './Api';
import File from 'Library/OS/Filesystem/File';
import { resolve } from 'path';

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
}

export default Project;

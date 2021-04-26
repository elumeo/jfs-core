import { basename, extname } from "path";
import * as Text from "Library/Text";

export type Scope = 'all' | 'core' | 'jfc' | 'app';

class Script {
  static registrator: string = 'register-scripts';
  path: string;
  scope: Scope[];
  name: string;
  constructor({ path, run, scope, force, name }: {
    path: string;
    name: string;
    run: () => void;
    scope: Scope[];
    force?: boolean;
  }) {
    this.path = path;
    this.name = name;
    this.scope = scope;
    const original = Text.Suffix.remove(
      basename(process.argv[1]),
      extname(process.argv[1])
    );
    if (original !== Script.registrator || force) {
      run();
    }
  }
}

export default Script;

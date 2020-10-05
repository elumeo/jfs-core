import Core from ".";
import Process from "Library/OS/Process";

class Subpackage {
  static install = (core: Core) => new Promise(resolve => {
    const child = new Process({
      command: 'npm',
      parameters: ['run', 'subpkg:install'],
      options: {
        cwd: core.path,
        stdio: 'inherit'
      }
    });

    child.run(instance => instance.on('exit', resolve));
  })
}

export default Subpackage;

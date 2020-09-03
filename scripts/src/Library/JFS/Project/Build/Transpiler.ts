import Directory from "Library/OS/Filesystem/Directory";
import Process from "Library/OS/Process";
import { green } from "ansi-colors";
import { ChildProcess } from "child_process";

class Transpiler {
  static process: ChildProcess = null;
  static running: boolean;

  static run = async (project: Directory) => new Promise((resolve) => {
    new Process({
      command: 'node',
      parameters: [
        project.resolve('node_modules', 'typescript', 'bin', 'tsc')
      ],
      options: {
        cwd: project.path,
        stdio: 'inherit'
      }
    }).run(instance => {
      Transpiler.running = true;
      Transpiler.process = instance;
      instance.on('exit', code => {
        Transpiler.running = false;
        if (!code) {
          console.log(green('No type errors found.'));
        }
        resolve();
      })
    })
  });
}

export default Transpiler;

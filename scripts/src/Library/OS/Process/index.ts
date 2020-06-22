import { ChildProcess, spawn, SpawnOptions } from "child_process";
import Directory from "Library/OS/Filesystem/Directory";

namespace Process {
  export type Props = {
    command: string;
    parameters: string[];
    options: SpawnOptions;
  }
}

class Process {
  public readonly command: string;
  public readonly parameters: string[];
  private instance: ChildProcess;
  public readonly options: SpawnOptions;
  constructor({ command, parameters, options }: Process.Props) {
    this.command = command;
    this.parameters = parameters;
    this.options = (options || {});
  }

  static print = (instance: ChildProcess) => {
    instance.stdout.on('data', data => console.log(data.toString()));
    instance.stderr.on('data', data => console.log(data.toString()));
    instance.on('exit', code => console.log('EXIT: ', code));
  }

  cwd = (cwd: Directory) => {
    this.options.cwd = cwd.path;
  }

  run = (onSpawn: (instance: ChildProcess) => void) => {
    this.instance = spawn(this.command, this.parameters, this.options);
    Process.print(this.instance);
    onSpawn(this.instance);
  }
}

export default Process;

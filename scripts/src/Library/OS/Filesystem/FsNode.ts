import { lstat, Stats, existsSync } from 'fs';
import { sep } from 'path';
import Emitter from 'events';

namespace FsNode {
  export type Props = {
    path: string;
  }
}

class FsNode {

  public readonly name: string;
  public readonly path: string;
  public readonly parent: string;
  public readonly predecessors: string[];
  protected emitter: Emitter;

  constructor(props: FsNode.Props) {
    this.path = props.path;
    this.predecessors = props.path.split(sep);
    this.name = this.predecessors[this.predecessors.length -1];
    this.parent = this.predecessors.slice(
      0,
      this.predecessors.length -1
    ).join(sep);
    this.emitter = new Emitter;
  }

  public stats = (statsReady: (stats: Stats) => void) => lstat(
    this.path,
    (error: NodeJS.ErrnoException, stats: Stats) => {
      if (error) {
        throw error;
      }
      else {
        statsReady(stats);
      }
    }
  );

  public exists = () => existsSync(this.path)

}

export default FsNode;

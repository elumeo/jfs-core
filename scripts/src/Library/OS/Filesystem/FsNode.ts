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
  public readonly segments: string[];
  public readonly predecessors: string[];
  protected emitter: Emitter;

  constructor(props: FsNode.Props) {
    this.path = props.path;
    this.segments = props.path.split(sep);
    this.predecessors = this.segments.slice(0, this.segments.length -1);
    this.name = this.segments[this.segments.length -1];
    this.parent = this.predecessors.join(sep) || sep;
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

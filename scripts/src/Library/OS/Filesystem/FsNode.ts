import { lstat, Stats, existsSync } from 'fs';
import { sep } from 'path';
import Emitter from 'events';

class FsNode {
  public readonly name: string;
  public readonly path: string;
  public readonly parent: string;
  public readonly segments: string[];
  public readonly predecessors: string[];
  protected emitter: Emitter;

  constructor({ path }: { path: string }) {
    this.path = path.replace('/', sep).replace('\\', sep);
    this.segments = path.split(sep);
    this.predecessors = this.segments.slice(0, this.segments.length -1);
    this.name = this.segments[this.segments.length -1];
    this.parent = this.predecessors.join(sep) || sep;
    this.emitter = new Emitter;
  }

  public stats = (onReady: (stats: Stats) => void) => lstat(
    this.path,
    (error: NodeJS.ErrnoException, stats: Stats) => {
      if (error) {
        throw error;
      }
      else {
        onReady(stats);
      }
    }
  );

  public exists = () => existsSync(this.path)

  public trace = (origin: FsNode = this): string[] => {
    if (origin.path.length > 1) {
      return [
        ...this.trace(new FsNode({ path: origin.parent })),
        origin.path
      ];
    }
    else {
      return [sep];
    }
  }

}

export default FsNode;

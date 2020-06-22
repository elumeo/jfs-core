import { lstat, Stats, existsSync } from 'fs';
import { sep } from 'path';

export interface IFsNodeProps {
    path: string;
}

const adjustToOs = (path: string) => {
  const hasIncompatibleSeparator = (path) => (
    sep === '\\' && path.includes('/') || sep === '/' && path.includes('/')
  );
  while (hasIncompatibleSeparator(path)) {
    path = path.replace('/', sep);
    path = path.replace('\\', sep);
  }
  return path;
}

class FsNode {

    public readonly name: string;
    public readonly path: string;
    public readonly parent: string;
    public readonly predecessors: string[];

    constructor(props: IFsNodeProps) {
        this.path = adjustToOs(props.path);
        this.predecessors = props.path.split(sep);
        this.name = this.predecessors[this.predecessors.length -1];
        this.parent = this.predecessors.slice(0, this.predecessors.length -1).join(sep);
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

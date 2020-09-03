import FsNode from '../FsNode';
import * as Operation from './Operation';
import * as Read from './Operation/Read';

class File extends FsNode {

    open = () => Operation.open(this.path);

    create = (
      onComplete: () => void
    ) => Operation.create(this.path, this.predecessors, onComplete);

    read = (options: Read.Options) => Operation.read(this.path, options);

    write = (
      data: string | Buffer, onComplete: () => void
    ) => Operation.write(this.path, data, onComplete);

    remove = (onComplete: () => void) => Operation.remove(this.path, onComplete);

    copy = (
      to: string, onComplete: (file: File) => void
    ) => Operation.copy(
      this.path,
      to,
      () => onComplete(new File({ path: to }))
    );

    move = (
      to: string, onComplete: (file: File) => void
    ) => Operation.move(
      this.path,
      to,
      () => onComplete(new File({ path: to }))
    );

    json = <T>(
      onComplete: (json: T) => void
    ) => Operation.json(this.path, onComplete);

    update = ({ patcher, onComplete }: {
      patcher: (data: string | Buffer) => (string | Buffer),
      onComplete: () => void
    }) => Operation.update(this.path, { patcher, onComplete });

    csv = <T>(
      onComplete: (csv: T[]) => void
    ) => Operation.csv(this.path, onComplete);

    save = <T>(
      data: T, onComplete: () => void
    ) => Operation.save(this.path, data, onComplete)
}

export default File;

import Directory from "./Directory";
import File from "./File";
import { resolve } from "path";
import Text from "Library/Text";

namespace Synchronization {
  export type Props = {
    from: string;
    to: string;
  }
}

class Synchronization {
  private sender: Directory;
  private recipient: Directory;

  constructor({ from, to }: Synchronization.Props) {
    this.sender = new Directory({ path: from });
    this.recipient = new Directory({ path: to });
  }

  private target = (source: File | Directory): File | Directory => {
    const FsNode = (
      source instanceof File
        ? File
        : Directory
    );

    return new FsNode({
      path: resolve(
        this.recipient.path,
        Text.removePrefix(
          source.path.substring(this.sender.path.length),
          '/'
        )
      )
    });
  };

  public run = (
    onSynchronized: (payload: {
      event: Directory.Event.Name;
      source: File | Directory;
      target: File | Directory;
    }) => void
  ) => {
    const { sender } = this;
    sender.watch();
    Directory.events.forEach(event => sender.on(
      event,
      source => {
        const onComplete = () => onSynchronized({ event, source, target });
        const target = this.target(source);
        if (Text.endsWith(event, 'CREATED')) {
          target.create(onComplete);
        }
        else if (Text.endsWith(event, 'REMOVED')) {
          target.remove(onComplete);
        }
        else if (event === 'FILE_CHANGED') {
          (source as File).copy(target.path, onComplete);
        }
      }
    ));
  }
}

export default Synchronization;

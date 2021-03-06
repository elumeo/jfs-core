import Directory from "./Directory";
import File from "./File";
import Event from './Event';
import { resolve, sep } from "path";
import Text from "Library/Text";

class Synchronization {
  private sender: Directory;
  private recipient: Directory;
  private ignore: string[];

  constructor({ from, to, ignore }: {
    from: string;
    to: string;
    ignore?: string[];
  }) {
    this.sender = new Directory({ path: from });
    this.recipient = new Directory({ path: to });
    this.ignore = ignore || [];
  }

  private target = (source: File | Directory): File | Directory => {
    const path = resolve(
      this.recipient.path,
      Text.removePrefix(
        source.path.substring(this.sender.path.length),
        sep
      )
    );

    if (source instanceof File) {
      return new File({ path });
    }
    else {
      return new Directory({ path });
    }
  };

  public run = (
    onSynchronized: (payload: {
      event: Event.Name;
      source: File | Directory;
      target: File | Directory;
    }) => void
  ) => {
    const { sender, recipient, ignore } = this;
    sender.watch();
    Event.names.forEach(event => sender.on(
      event,
      source => {
        const onComplete = () => onSynchronized({ event, source, target });
        const target = this.target(source);

        const ignored = ignore.includes(
          target.path.substring(recipient.path.length +1).split(sep)[0]
        );

        if (ignored) {

        }
        else if (Text.endsWith(event, 'CREATED')) {
          target.create(onComplete);
        }
        else if (Text.endsWith(event, 'REMOVED')) {
          target.remove(onComplete);
        }
        else if (event === 'FILE_CHANGED') {
          setTimeout(
            () => {
              (source as File).copy(target.path, onComplete);
            },
            400
          );
        }
      }
    ));
  }
}

export default Synchronization;

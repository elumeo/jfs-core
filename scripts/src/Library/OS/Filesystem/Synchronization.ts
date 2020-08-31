import Directory from "./Directory";
import File from "./File";
import { resolve, sep } from "path";
import Text from "Library/Text";

namespace Synchronization {
  export type Props = {
    from: string;
    to: string;
    ignore?: string[];
  }
}

class Synchronization {
  private sender: Directory;
  private recipient: Directory;
  private ignore: string[];

  constructor({ from, to, ignore }: Synchronization.Props) {
    this.sender = new Directory({ path: from });
    this.recipient = new Directory({ path: to });
    this.ignore = ignore || [];
  }

  private target = (source: File | Directory): File | Directory => {
    const FsNode = (
      source instanceof File
        ? File
        : Directory
    );

    console.log({
      recipient: this.recipient.path,
      virtual: source.path.substring(this.sender.path.length),
      withoutPrefix: Text.removePrefix(
        source.path.substring(this.sender.path.length),
        '/'
      ),
      recipientResource: resolve(
        this.recipient.path,
        Text.removePrefix(
          source.path.substring(this.sender.path.length),
          '/'
        )
      )
    });

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
    const { sender, recipient, ignore } = this;
    sender.watch();
    Directory.events.forEach(event => sender.on(
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
          (source as File).read(
            text => (target as File).write(
              text,
              onComplete
            )
          );
        }
      }
    ));
  }
}

export default Synchronization;

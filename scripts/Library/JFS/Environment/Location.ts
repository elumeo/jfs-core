class Location {

  public readonly type: Location.Type;
  public readonly path: string;

  constructor({ type, path }: Location.Props) {
    this.type = type;
    this.path = path;
  }

  run = (type: Location.Type, callback: () => void) => {
    if (this.type === type) {
      callback();
    }
  }

}

namespace Location {

  export type Props = {
    path: string;
    type: Location.Type;
  };

  export enum Type {
    LOCAL = 'local',
    REMOTE = 'remote'
  }

}

export default Location;

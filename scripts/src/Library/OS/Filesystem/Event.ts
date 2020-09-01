import File from "./File";
import Directory from "./Directory";

namespace Event {
  export type Name = (
    'FILE_CREATED' |
    'FILE_CHANGED' |
    'FILE_REMOVED' |
    'DIRECTORY_CREATED' |
    'DIRECTORY_REMOVED'
  );
  export type Payload = File | Directory;
}

class Event {
  static names: Event.Name[] = [
    'FILE_CREATED',
    'FILE_CHANGED',
    'FILE_REMOVED',
    'DIRECTORY_CREATED',
    'DIRECTORY_REMOVED'
  ];

  name: Event.Name;
  payload: Event.Payload;
}

export default Event;

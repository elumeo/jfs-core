import * as EcmaScript from '../../EcmaScript';
import * as Text from '../../Text';

const ROOM_UPDATE_ACTION_ID = (core: boolean) => (
  core
    ? 'Constant/WebSocket'
    : '@elumeo/jfs-core/build/Constant/WebSocket'
);

const IWebSocketRoom = (core: boolean) => (
  core
    ? 'Types/WebSocket'
    : '@elumeo/jfs-core/build/Types/WebSocket'
);

export default (core: boolean) => Text.lines(
  EcmaScript.import({ what: '{ Observable, Subject }', from: 'rxjs' }),
  EcmaScript.import({ what: '{ PayloadAction }', from: 'typesafe-actions' }),
  EcmaScript.import({ what: '{ ROOM_UPDATE_ACTION_ID }', from: ROOM_UPDATE_ACTION_ID(core) }),
  EcmaScript.import({ what: '{ IWebSocketRoom }', from: IWebSocketRoom(core) }),
);
import { Logger } from '../../Types/Debug';
import { ROOM_UPDATE_ACTION_ID } from '../../Constant/WebSocket';
import { IWebSocketRoom } from '../../Types/WebSocket';
import actionToString from './actionToString';

const Mapper: Logger['mapper'] = (action) => {
  switch (action.type) {
    case ROOM_UPDATE_ACTION_ID: return `${actionToString(action)} - ${(action?.payload as IWebSocketRoom)?.room} : ${(action?.payload as IWebSocketRoom)?.room !== 'currentGameDetails'
      ? `(${(action.payload as IWebSocketRoom<Array<unknown>>).data?.length})`
      : JSON.stringify((action.payload as IWebSocketRoom).data)}`
    default: return actionToString(action)
  }
}

export default Mapper

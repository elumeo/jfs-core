import { createAction } from 'typesafe-actions';
import { ROOM_UPDATE_ACTION_ID } from '../../Constant/WebSocket';
import { IWebSocketRoom } from '../../Types/WebSocket';

// Any updates of the provided action will be stored in Core->Debug->callstack
export default [createAction(ROOM_UPDATE_ACTION_ID)<IWebSocketRoom>()]

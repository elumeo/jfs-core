import { combineEpics } from 'redux-observable';
import appIsInitialized from './appIsInitialized';
import connectRequest from './connectRequest';
import logout from './logout';
import checkForConnectionError from './checkForConnectionError';
import checkForReconnect from './checkForReconnect';
import connectSuccess from './connectSuccess';
import disconnectRequest from './disconnectRequest';
import joinRoomRequest from './joinRoomRequest';
import joinRoomLoading from './joinRoomLoading';
import leaveRoomRequest from './leaveRoomRequest';

export default combineEpics(
  appIsInitialized,
  connectRequest,
  connectSuccess,
  checkForConnectionError,
  checkForReconnect,
  disconnectRequest,
  joinRoomLoading,
  joinRoomRequest,
  leaveRoomRequest,
  logout,
);

import { State } from 'Store/Reducer/Global';
import { createSelector } from 'reselect';

export const isJsc2JfsWebSocketConnected = createSelector(
  (state: State) => state.Core.WebSocket['Jsc2Jfs'],
  namespace => namespace !== undefined && namespace.isConnected
);

export const isJfs2JfsWebSocketConnected = createSelector(
  (state: State) => state.Core.WebSocket['Jfs2Jfs'],
  namespace => namespace !== undefined && namespace.isConnected
);
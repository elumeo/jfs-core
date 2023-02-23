import { State } from 'Store/Reducer/Global';
import { createSelector } from 'reselect';

export const pickState = (state: State) => state.Core.WebSocket;

export const pickJsc2Jfs = createSelector(
  pickState,
  state => state['Jsc2Jfs'],
);
export const pickJfs2Jfs = createSelector(
  pickState,
  state => state['Jfs2Jfs'],
);

export const isJsc2JfsWebSocketConnected = createSelector(
  pickJsc2Jfs,
  namespace => namespace !== undefined && namespace.isConnected,
);

export const isJfs2JfsWebSocketConnected = createSelector(
  pickJfs2Jfs,
  namespace => namespace !== undefined && namespace.isConnected,
);

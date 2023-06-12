import { State } from 'Store/Reducer/Global';
import { createSelector } from 'reselect';

export const appInitialized = createSelector(
  (state: State) => state.Core.App,
  state => state.appInitialized,
);


export const packageJson = createSelector(
  (state: State) => state.Core.App,
  state => state.packageJson,
);

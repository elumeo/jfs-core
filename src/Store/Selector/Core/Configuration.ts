import { State } from 'Store/Reducer/Global';
import { createSelector } from 'reselect';

export const Configuration = createSelector(
  (state: State) => state.Core.Configuration,
  state => state.config,
);

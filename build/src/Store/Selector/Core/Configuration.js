import { createSelector } from 'reselect';
export const Configuration = createSelector((state) => state.Core.Configuration, state => state.config);

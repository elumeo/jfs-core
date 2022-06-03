import { createSelector } from 'reselect';
import Global from './Global';

export const Core = createSelector(
    Global,
    state => state.Core
)
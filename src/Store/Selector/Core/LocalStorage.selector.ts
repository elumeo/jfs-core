import { createSelector } from 'reselect';
import { Core } from './Core';


export const pickState = createSelector(Core, core => core.LocalStorage);

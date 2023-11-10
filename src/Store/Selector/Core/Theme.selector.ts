import { createSelector } from 'reselect';
import { Core } from './Core';

export const pickTheme = createSelector(Core, core => core.Theme)
export const pickThemeVariant = createSelector(pickTheme, theme => theme.themeVariant)

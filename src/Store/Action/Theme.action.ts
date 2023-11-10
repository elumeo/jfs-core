

import { createAction } from 'typesafe-actions';
import { ThemeVariant } from 'Types/ThemeVariant.type';

export const setThemeVariant = createAction('Core/Theme/setThemeVariant')<ThemeVariant>();

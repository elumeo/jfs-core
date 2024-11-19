

import { createAction } from 'typesafe-actions';
import { ThemeVariant } from 'Types/ThemeVariant.type';

export const savePreferredThemeVariant = createAction('Core/Theme/setThemeVariant')<ThemeVariant>(); //< themeVariant>

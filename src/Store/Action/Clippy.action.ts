


import { createAction } from 'typesafe-actions';
import { Agent } from 'Types/Clippy.type';

export const savePreferredClippyVariant = createAction('Core/Clippy/savePreferredClippyVariant')<Agent>(); //<userId, themeVariant>



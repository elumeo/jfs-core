


import { createAction } from 'typesafe-actions';
import { Agent } from 'Types/Clippy.type';

export const savePreferredClippyVariant = createAction('Core/Clippy/savePreferredClippyVariant')<Agent>();
export const clippyInit = createAction('Core/Clippy/clippyInit')<void>();
export const clippyDestroy = createAction('Core/Clippy/clippyDestroy')<void>();
export const clippyShow = createAction('Core/Clippy/clippyShow')<void>();
export const clippyHide = createAction('Core/Clippy/clippyHide')<void>();
export const clippySay = createAction('Core/Clippy/clippySay')<string>();
export const clippySayQueue = createAction('Core/Clippy/clippySayQueue')<string[]>();
export const clippyAnimate = createAction('Core/Clippy/clippyPlay')<string>();
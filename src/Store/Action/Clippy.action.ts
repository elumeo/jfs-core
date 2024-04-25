


import { createAction } from 'typesafe-actions';
import { Agent } from 'Types/Clippy.type';

export const clippySaveAgent = createAction('Core/Clippy/clippySaveAgent')<Agent>();
export const clippyInit = createAction('Core/Clippy/clippyInit')<Agent>();
export const clippyInitialized = createAction('Core/Clippy/clippyInitialized')<Agent>();
export const clippyDestroy = createAction('Core/Clippy/clippyDestroy')<void>();
export const clippyShow = createAction('Core/Clippy/clippyShow')();
export const clippyHide = createAction('Core/Clippy/clippyHide')();
export const clippySay = createAction('Core/Clippy/clippySay')<string, string/*name of animation*/ | void>();
export const clippySayQueue = createAction('Core/Clippy/clippySayQueue')<string[]>();
export const clippyAnimate = createAction('Core/Clippy/clippyAnimate')<string /*name of animation*/ | void>();
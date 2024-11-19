


import { createAction } from 'typesafe-actions';
import { Agent } from 'Types/Clippy.type';

export const clippySaveAgent = createAction('Core/Clippy/clippySaveAgent')<Agent>();
export const clippyInit = createAction('Core/Clippy/clippyInit')<Agent>();
export const clippyInitialized = createAction('Core/Clippy/clippyInitialized')<Agent>();
export const clippyDestroy = createAction('Core/Clippy/clippyDestroy')<void>();
export const clippySay = createAction('Core/Clippy/clippySay')<string, string/*optional name of animation*/ | void>();
export const clippySayQueue = createAction('Core/Clippy/clippySayQueue')<string[], number | undefined/**interval between messages */>();
export const clippyAnimate = createAction('Core/Clippy/clippyAnimate')<string /*optional name of animation*/ | void>();

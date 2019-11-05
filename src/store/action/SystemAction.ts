import { createStandardAction } from 'typesafe-actions';

export interface IRegionLoadedPayload {
  regionName: string;
}

export const regionLoaded = createStandardAction('region/LOADED')<IRegionLoadedPayload>();
export const getRegionFailed = createStandardAction('region/GET_FAILED')<void>();
export const setLoginDialogVisibilityAction = createStandardAction("login/SET_DIALOG_VISIBILITY")<boolean>();
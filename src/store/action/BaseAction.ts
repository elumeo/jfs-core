import { IToastConfig } from "../reducer/BaseReducer";
import { createStandardAction } from "typesafe-actions";

export const addToastAction = createStandardAction('toast/ADD')<IToastConfig>();
export const dismissToastAction = createStandardAction('toast/DELETE')();
export const changeLanguageAction = createStandardAction('language/CHANGE')<string>();

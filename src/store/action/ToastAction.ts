import { IToastConfig } from "../reducer/ToastReducer";
import { createStandardAction } from "typesafe-actions";

export const addToastAction = createStandardAction('toast/ADD')<IToastConfig>();
export const dismissToastAction = createStandardAction('toast/DELETE')();
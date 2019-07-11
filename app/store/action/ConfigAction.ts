import { createStandardAction } from "typesafe-actions";

export const configLoadedAction = createStandardAction('config/LOADED')<{}>();

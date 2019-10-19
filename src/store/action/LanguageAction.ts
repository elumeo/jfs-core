import { createStandardAction } from "typesafe-actions";

export const changeLanguageAction = createStandardAction('language/CHANGE')<string>();

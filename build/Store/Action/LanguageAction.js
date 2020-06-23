import { createStandardAction } from 'typesafe-actions';
const featureName = 'language';
export const changeLanguageAction = (createStandardAction(featureName + '/CHANGE')());
export const initializeLanguage = (createStandardAction(`${featureName}/INITIALIZE`)());
//# sourceMappingURL=LanguageAction.js.map
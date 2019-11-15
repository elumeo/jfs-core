import { createStandardAction } from 'typesafe-actions';

const featureName = 'language';

export const changeLanguageAction = createStandardAction(featureName + '/CHANGE')<string>();

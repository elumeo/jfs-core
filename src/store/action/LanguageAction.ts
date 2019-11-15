import { createAction } from 'typesafe-actions';

const featureName = 'language';

export const changeLanguageAction = createAction(featureName + '/CHANGE')<string>();

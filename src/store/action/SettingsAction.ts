import { createStandardAction } from 'typesafe-actions';

export const openDialog = createStandardAction('settings/OPEN')();
export const closeDialog = createStandardAction('settings/CLOSE')();

import { createAction } from 'typesafe-actions';

export const openNavigation = createAction('navigation/OPEN')();
export const closeNavigation = createAction('navigation/CLOSE')();

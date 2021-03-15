import * as TA from 'typesafe-actions';
import * as Type from 'Types/Notification';

export const addNotification = (
  TA.createStandardAction('notification/ADD')<Type.Notification>()
);

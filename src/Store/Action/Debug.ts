import { createAction } from 'typesafe-actions';

export const post = createAction('CORE/Debug/mattermost/post')<string>()
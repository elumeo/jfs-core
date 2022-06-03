import { useSelector } from 'react-redux';
import { Logger } from 'Types/Debug';
import { createAction } from 'typesafe-actions';

export const register = createAction('CORE/DEBUGGER/register')<Required<Omit<Logger, 'selector'>>>()
export const log = createAction('CORE/DEBUGGER/log')<unknown>()
export const post = createAction('CORE/DEBUGGer/mattermost/post')<{ description: string, state: ReturnType<typeof useSelector> }>()
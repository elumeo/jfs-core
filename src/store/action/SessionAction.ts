import { createStandardAction, PayloadAction } from 'typesafe-actions';
import JSCApi from '../../JscApi';
import { IToastConfig } from '../reducer/ToastReducer';
import ISessionDTO = JSCApi.DTO.Session.ISessionDTO;

export type ILoginType = {
    username: string;
    password: string;
};

export const loginAction = createStandardAction('session/LOGIN')<ILoginType>();
export const logoutAction = createStandardAction('session/LOGOUT')<null | PayloadAction<string, IToastConfig>>();

export const sessionIsAuthorizedAction = createStandardAction('session/AUTHORIZED')<ISessionDTO>();
export const sessionIsUnauthorizedAction = createStandardAction('session/UNAUTHORIZED')();

export const checkRightsAction = createStandardAction('rights/CHECK')<ISessionDTO>();

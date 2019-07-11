import { createStandardAction  } from 'typesafe-actions';
import JSCApi from "../../base/JscApi";
import ISessionDTO = JSCApi.DTO.Session.ISessionDTO;

export type ILoginType = {
    username: string;
    password: string;
};

export const checkLoginAction = createStandardAction('login/CHECK')<ILoginType>();

export const checkSessionAction = createStandardAction('session/CHECK')();

export const logoutAction = createStandardAction('session/LOGOUT')();

export const checkUserRightsAction = createStandardAction('userRights/CHECK')<ISessionDTO>();

export const sessionIsAuthorizedAction = createStandardAction('session/AUTHORIZED')<ISessionDTO>();

export const sessionIsUnauthorizedAction = createStandardAction('session/UNAUTHORIZED')();

import { createAction } from 'typesafe-actions';
import JSCApi from 'API/JSC';

export const currentGameUpdateAction = (
  createAction('currentGame/UPDATE_ROOM')<JSCApi.DTO.Game.IGameDTO>()
);

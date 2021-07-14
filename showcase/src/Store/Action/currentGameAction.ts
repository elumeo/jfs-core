import * as TA from 'typesafe-actions';
import JSCApi from 'API/JSC';

export const currentGameUpdateAction = (
  TA.createAction('currentGame/UPDATE_ROOM')<JSCApi.DTO.Game.IGameDTO>()
);

import * as TA from 'typesafe-actions';
import JSCApi from 'API/JSC';


const featureName = 'currentGame';

export const currentGameUpdateAction = (
  TA.createStandardAction(
    featureName + '/UPDATE_ROOM'
  )<JSCApi.DTO.Game.IGameDTO>()
);

import { createStandardAction } from 'typesafe-actions';

import JSCApi from 'Jsc/Api/index';

const featureName = 'currentGame';

export const currentGameUpdateAction = createStandardAction(featureName + '/UPDATE_ROOM')<JSCApi.DTO.Game.IGameDTO>();

import { createStandardAction } from 'typesafe-actions';

const featureName = 'Jsc2JfsPingExample';

export const Jsc2JfsPingExampleUpdateRoomAction = createStandardAction(featureName + '/UPDATE_ROOM')<string>();

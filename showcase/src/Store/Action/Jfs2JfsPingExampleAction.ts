import { createStandardAction } from 'typesafe-actions';

const featureName = 'Jfs2JfsPingExample';

export const Jfs2JfsPingExampleUpdateRoomAction = createStandardAction(featureName + '/UPDATE_ROOM')<string>();
